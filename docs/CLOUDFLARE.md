# Cloudflare — Cabeceras de seguridad y CSP

Guía para reforzar la seguridad de la landing de Conciron cuando se use un **dominio propio** (por ejemplo `www.conciron.com.mx`) delante de GitHub Pages.

> **Nota:** En `*.github.io` no puedes configurar CSP ni cabeceras personalizadas. Este paso aplica solo con dominio propio + Cloudflare (u otro CDN).

---

## Requisitos previos

1. Dominio registrado (ej. `conciron.com.mx`)
2. Cuenta en [Cloudflare](https://dash.cloudflare.com) (plan Free es suficiente)
3. Repositorio desplegado en GitHub Pages

---

## Paso 1 — DNS en Cloudflare

1. Añade tu dominio a Cloudflare.
2. En **DNS**, crea un registro para el sitio:

| Tipo | Nombre | Contenido | Proxy |
|------|--------|-----------|-------|
| `CNAME` | `www` | `stuartga.github.io` | Proxied (nube naranja) |

3. En GitHub → repo → **Settings → Pages → Custom domain**, indica `www.conciron.com.mx`.
4. En Cloudflare → **SSL/TLS → Overview**, usa **Full (strict)**.

Para apex (`conciron.com.mx` sin `www`), configura redirección a `www` o usa registros A/AAAA según la [documentación de GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## Paso 2 — Cabeceras de seguridad (Transform Rules)

En Cloudflare → **Rules** → **Transform Rules** → **Modify Response Header** → **Create rule**:

**Nombre:** `Conciron security headers`

**When incoming requests match:**
```
(http.host eq "www.conciron.com.mx")
```

**Then modify response header** (Set static):

| Header | Valor |
|--------|--------|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=()` |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` |

---

## Paso 3 — Content Security Policy (CSP)

Sitio estático React sin scripts de terceros. CSP recomendada:

```
default-src 'self';
script-src 'self';
style-src 'self' 'unsafe-inline';
img-src 'self' data:;
font-src 'self';
connect-src 'self';
frame-ancestors 'none';
base-uri 'self';
form-action 'self' mailto:;
upgrade-insecure-requests;
```

Añádela como cabecera adicional en la misma Transform Rule:

| Header | Valor |
|--------|--------|
| `Content-Security-Policy` | *(pega la política en una sola línea)* |

### Si añades analítica (Google Analytics, etc.)

Amplía `script-src` y `connect-src`:

```
script-src 'self' https://www.googletagmanager.com;
connect-src 'self' https://www.google-analytics.com;
```

Vuelve a validar con [securityheaders.com](https://securityheaders.com).

---

## Paso 4 — Verificación

```bash
curl -sI https://www.conciron.com.mx/ | grep -iE 'content-security|x-frame|x-content|referrer|permissions'
```

También revisa en Lighthouse → Best Practices y en [Mozilla Observatory](https://observatory.mozilla.org/).

---

## Paso 5 — Cache (opcional)

Cloudflare puede cachear assets estáticos (`/assets/*`, `/images/*`) y reducir latencia:

**Cache Rule:** si la URL contiene `/assets/` o `/images/` → **Cache eligibility: Eligible**, TTL 1 mes.

GitHub Pages ya sirve los archivos; Cloudflare los cachea en el edge.

---

## Checklist

- [ ] Dominio propio apuntando a GitHub Pages
- [ ] SSL Full (strict) en Cloudflare
- [ ] Cabeceras `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`
- [ ] CSP sin `'unsafe-eval'` (no requerido en este proyecto)
- [ ] Páginas legales publicadas (`/legal/aviso-privacidad.html`, `/legal/terminos.html`)
- [ ] Aviso de privacidad enlazado en el footer

---

## Alternativa sin Cloudflare

Si migras el deploy a **Cloudflare Pages** en lugar de GitHub Pages, puedes definir cabeceras en `_headers` en `public/`:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; frame-ancestors 'none'
```

Vite copia `public/_headers` al directorio `dist/` automáticamente.
