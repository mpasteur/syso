import { iframeResizer } from 'iframe-resizer'
let script = document.getElementById('script-simulateur-embauche'),
	couleur = script.dataset.couleur,
	baseUrl =
		script.dataset.iframeUrl || script.getAttribute('src').split('dist')[0],
	integratorUrl = encodeURIComponent(window.location.href.toString()),
	lang = script.dataset.lang,
	src =
		baseUrl +
		`?s=e&couleur=${couleur}&iframe&integratorUrl=${integratorUrl}&lang=${lang}`

const iframe = document.createElement('iframe')
const iframeAttributes = {
	id: 'simulateurEmbauche',
	src,
	style:
		'border: none; width: 100%; display: block; margin: 10px auto; min-height: 700px',
	allowfullscreen: true,
	webkitallowfullscreen: true,
	mozallowfullscreen: true
}
for (var key in iframeAttributes) {
	iframe.setAttribute(key, iframeAttributes[key])
}
iframeResizer(
	{
		interval: 0,
		scrolling: 'auto',
		heightCalculationMethod: 'lowestElement'
	},
	iframe
)
script.parentNode.insertBefore(iframe, script)
