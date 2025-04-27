import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        // default theme config
        hostname: 'https://spokanefreestore.org',
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
        ],
    }),
    base: "/",
    lang: 'en-US',
    title: 'Spokane Free Store',
    description: 'The website of the Spokane Free Store',

})
