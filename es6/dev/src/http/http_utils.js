import { isString } from 'angular2/src/facade/lang';
import { RequestMethod } from './enums';
import { makeTypeError } from 'angular2/src/facade/exceptions';
export function normalizeMethodName(method) {
    if (isString(method)) {
        var originalMethod = method;
        method = method
            .replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
        method = RequestMethod[method];
        if (typeof method !== 'number')
            throw makeTypeError(`Invalid request method. The method "${originalMethod}" is not supported.`);
    }
    return method;
}
export const isSuccess = (status) => (status >= 200 && status < 300);
export function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return;
}
export { isJsObject } from 'angular2/src/facade/lang';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cF91dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtVGNVaGtLa1gudG1wL2FuZ3VsYXIyL3NyYy9odHRwL2h0dHBfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSwwQkFBMEI7T0FDMUMsRUFBQyxhQUFhLEVBQUMsTUFBTSxTQUFTO09BQzlCLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDO0FBRzVELG9DQUFvQyxNQUE4QjtJQUNoRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQztRQUM1QixNQUFNLEdBQVksTUFBTzthQUNYLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsS0FDL0IsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzdFLE1BQU0sR0FBa0MsYUFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQztZQUM3QixNQUFNLGFBQWEsQ0FDZix1Q0FBdUMsY0FBYyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFDRCxNQUFNLENBQWdCLE1BQU0sQ0FBQztBQUMvQixDQUFDO0FBRUQsT0FBTyxNQUFNLFNBQVMsR0FBRyxDQUFDLE1BQWMsS0FBYyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBRXRGLCtCQUErQixHQUFRO0lBQ3JDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsTUFBTSxDQUFDO0FBQ1QsQ0FBQztBQUVELFNBQVEsVUFBVSxRQUFPLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1N0cmluZ30gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7UmVxdWVzdE1ldGhvZH0gZnJvbSAnLi9lbnVtcyc7XG5pbXBvcnQge21ha2VUeXBlRXJyb3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge1Jlc3BvbnNlfSBmcm9tICcuL3N0YXRpY19yZXNwb25zZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVNZXRob2ROYW1lKG1ldGhvZDogc3RyaW5nIHwgUmVxdWVzdE1ldGhvZCk6IFJlcXVlc3RNZXRob2Qge1xuICBpZiAoaXNTdHJpbmcobWV0aG9kKSkge1xuICAgIHZhciBvcmlnaW5hbE1ldGhvZCA9IG1ldGhvZDtcbiAgICBtZXRob2QgPSAoPHN0cmluZz5tZXRob2QpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXFx3KShcXHcqKS9nLCAoZzA6IHN0cmluZywgZzE6IHN0cmluZywgZzI6IHN0cmluZykgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZzEudG9VcHBlckNhc2UoKSArIGcyLnRvTG93ZXJDYXNlKCkpO1xuICAgIG1ldGhvZCA9IDxudW1iZXI+KDx7W2tleTogc3RyaW5nXTogYW55fT5SZXF1ZXN0TWV0aG9kKVttZXRob2RdO1xuICAgIGlmICh0eXBlb2YgbWV0aG9kICE9PSAnbnVtYmVyJylcbiAgICAgIHRocm93IG1ha2VUeXBlRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgcmVxdWVzdCBtZXRob2QuIFRoZSBtZXRob2QgXCIke29yaWdpbmFsTWV0aG9kfVwiIGlzIG5vdCBzdXBwb3J0ZWQuYCk7XG4gIH1cbiAgcmV0dXJuIDxSZXF1ZXN0TWV0aG9kPm1ldGhvZDtcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3VjY2VzcyA9IChzdGF0dXM6IG51bWJlcik6IGJvb2xlYW4gPT4gKHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlc3BvbnNlVVJMKHhocjogYW55KTogc3RyaW5nIHtcbiAgaWYgKCdyZXNwb25zZVVSTCcgaW4geGhyKSB7XG4gICAgcmV0dXJuIHhoci5yZXNwb25zZVVSTDtcbiAgfVxuICBpZiAoL15YLVJlcXVlc3QtVVJMOi9tLnRlc3QoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSkge1xuICAgIHJldHVybiB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1gtUmVxdWVzdC1VUkwnKTtcbiAgfVxuICByZXR1cm47XG59XG5cbmV4cG9ydCB7aXNKc09iamVjdH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbiJdfQ==