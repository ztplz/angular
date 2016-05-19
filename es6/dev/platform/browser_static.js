export * from 'angular2/src/core/angular_entrypoint';
export { BROWSER_PROVIDERS, ELEMENT_PROBE_PROVIDERS, ELEMENT_PROBE_PROVIDERS_PROD_MODE, inspectNativeElement, BrowserDomAdapter, By, Title, enableDebugTools, disableDebugTools } from 'angular2/src/platform/browser_common';
import { isPresent, CONST_EXPR } from 'angular2/src/facade/lang';
import { BROWSER_PROVIDERS, BROWSER_APP_COMMON_PROVIDERS } from 'angular2/src/platform/browser_common';
import { platform } from 'angular2/core';
/**
 * An array of providers that should be passed into `application()` when bootstrapping a component
 * when all templates
 * have been precompiled offline.
 */
export const BROWSER_APP_PROVIDERS = CONST_EXPR(BROWSER_APP_COMMON_PROVIDERS);
/**
 * See {@link bootstrap} for more information.
 */
export function bootstrapStatic(appComponentType, customProviders, initReflector) {
    if (isPresent(initReflector)) {
        initReflector();
    }
    let appProviders = isPresent(customProviders) ? [BROWSER_APP_PROVIDERS, customProviders] : BROWSER_APP_PROVIDERS;
    return platform(BROWSER_PROVIDERS).application(appProviders).bootstrap(appComponentType);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9zdGF0aWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLVRjVWhrS2tYLnRtcC9hbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyX3N0YXRpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLHNDQUFzQyxDQUFDO0FBQ3JELFNBQ0UsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixpQ0FBaUMsRUFDakMsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixFQUFFLEVBQ0YsS0FBSyxFQUNMLGdCQUFnQixFQUNoQixpQkFBaUIsUUFDWixzQ0FBc0MsQ0FBQztPQUV2QyxFQUFPLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSwwQkFBMEI7T0FDN0QsRUFDTCxpQkFBaUIsRUFDakIsNEJBQTRCLEVBQzdCLE1BQU0sc0NBQXNDO09BQ3RDLEVBQWUsUUFBUSxFQUFDLE1BQU0sZUFBZTtBQUVwRDs7OztHQUlHO0FBQ0gsT0FBTyxNQUFNLHFCQUFxQixHQUM5QixVQUFVLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUU3Qzs7R0FFRztBQUNILGdDQUFnQyxnQkFBc0IsRUFDdEIsZUFBd0QsRUFDeEQsYUFBd0I7SUFDdEQsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixhQUFhLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFBSSxZQUFZLEdBQ1osU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsZUFBZSxDQUFDLEdBQUcscUJBQXFCLENBQUM7SUFDbEcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUMzRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvYW5ndWxhcl9lbnRyeXBvaW50JztcbmV4cG9ydCB7XG4gIEJST1dTRVJfUFJPVklERVJTLFxuICBFTEVNRU5UX1BST0JFX1BST1ZJREVSUyxcbiAgRUxFTUVOVF9QUk9CRV9QUk9WSURFUlNfUFJPRF9NT0RFLFxuICBpbnNwZWN0TmF0aXZlRWxlbWVudCxcbiAgQnJvd3NlckRvbUFkYXB0ZXIsXG4gIEJ5LFxuICBUaXRsZSxcbiAgZW5hYmxlRGVidWdUb29scyxcbiAgZGlzYWJsZURlYnVnVG9vbHNcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXJfY29tbW9uJztcblxuaW1wb3J0IHtUeXBlLCBpc1ByZXNlbnQsIENPTlNUX0VYUFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge1xuICBCUk9XU0VSX1BST1ZJREVSUyxcbiAgQlJPV1NFUl9BUFBfQ09NTU9OX1BST1ZJREVSU1xufSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlcl9jb21tb24nO1xuaW1wb3J0IHtDb21wb25lbnRSZWYsIHBsYXRmb3JtfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuLyoqXG4gKiBBbiBhcnJheSBvZiBwcm92aWRlcnMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIGludG8gYGFwcGxpY2F0aW9uKClgIHdoZW4gYm9vdHN0cmFwcGluZyBhIGNvbXBvbmVudFxuICogd2hlbiBhbGwgdGVtcGxhdGVzXG4gKiBoYXZlIGJlZW4gcHJlY29tcGlsZWQgb2ZmbGluZS5cbiAqL1xuZXhwb3J0IGNvbnN0IEJST1dTRVJfQVBQX1BST1ZJREVSUzogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4gPVxuICAgIENPTlNUX0VYUFIoQlJPV1NFUl9BUFBfQ09NTU9OX1BST1ZJREVSUyk7XG5cbi8qKlxuICogU2VlIHtAbGluayBib290c3RyYXB9IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYm9vdHN0cmFwU3RhdGljKGFwcENvbXBvbmVudFR5cGU6IFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVByb3ZpZGVycz86IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0UmVmbGVjdG9yPzogRnVuY3Rpb24pOiBQcm9taXNlPENvbXBvbmVudFJlZj4ge1xuICBpZiAoaXNQcmVzZW50KGluaXRSZWZsZWN0b3IpKSB7XG4gICAgaW5pdFJlZmxlY3RvcigpO1xuICB9XG5cbiAgbGV0IGFwcFByb3ZpZGVycyA9XG4gICAgICBpc1ByZXNlbnQoY3VzdG9tUHJvdmlkZXJzKSA/IFtCUk9XU0VSX0FQUF9QUk9WSURFUlMsIGN1c3RvbVByb3ZpZGVyc10gOiBCUk9XU0VSX0FQUF9QUk9WSURFUlM7XG4gIHJldHVybiBwbGF0Zm9ybShCUk9XU0VSX1BST1ZJREVSUykuYXBwbGljYXRpb24oYXBwUHJvdmlkZXJzKS5ib290c3RyYXAoYXBwQ29tcG9uZW50VHlwZSk7XG59XG4iXX0=