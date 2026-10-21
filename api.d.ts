import type { ThemesApi } from '@revenge-mod/themes-api/types'

declare module '@revenge-mod/plugins/types' {
	interface PreInitPluginApi<
		O extends PluginApiExtensionsOptions = PluginApiExtensionsOptions,
	> {
		themes: ThemesApi
	}
}
