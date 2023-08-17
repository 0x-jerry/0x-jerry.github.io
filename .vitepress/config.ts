import type { ThemeOption } from '@/index'
import { defineConfigWithTheme } from 'vitepress'
import { IThemeRegistration, getHighlighter, BUNDLED_LANGUAGES } from 'shiki'

export default async () => {
  return defineConfigWithTheme<ThemeOption>({
    themeConfig: {
      name: '0x-Jerry',
    },
    markdown: {
      highlight: await highlight(),
    },
  })
}

export type ThemeOptions =
  | IThemeRegistration
  | { light: IThemeRegistration; dark: IThemeRegistration }

export async function highlight(theme: ThemeOptions = 'github-light') {
  const hasSingleTheme = typeof theme === 'string' || 'name' in theme
  const getThemeName = (themeValue: IThemeRegistration) =>
    typeof themeValue === 'string' ? themeValue : themeValue.name

  const highlighter = await getHighlighter({
    themes: hasSingleTheme ? [theme] : [theme.dark, theme.light],
  })

  const preRE = /^<pre.*?>/
  const vueRE = /-vue$/

  return (str: string, lang: string) => {
    // default lang
    if (!BUNDLED_LANGUAGES.find((n) => n.id === lang)) {
      lang = 'c'
    }

    const vPre = vueRE.test(lang) ? '' : 'v-pre'
    lang = lang.replace(vueRE, '').toLowerCase()

    if (hasSingleTheme) {
      return highlighter
        .codeToHtml(str, { lang, theme: getThemeName(theme) })
        .replace(preRE, `<pre ${vPre}>`)
    }

    const dark = highlighter
      .codeToHtml(str, { lang, theme: getThemeName(theme.dark) })
      .replace(preRE, `<pre ${vPre} class="vp-code-dark">`)

    const light = highlighter
      .codeToHtml(str, { lang, theme: getThemeName(theme.light) })
      .replace(preRE, `<pre ${vPre} class="vp-code-light">`)

    return dark + light
  }
}
