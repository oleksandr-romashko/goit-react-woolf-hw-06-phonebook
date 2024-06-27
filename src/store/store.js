import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension'; 
import rootReducer from './rootReducer';

/**
 * Redux DevTools for debugging application's state changes.
 * Srowser extentions:
 * @see {@link https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd|Chrome Web Store}.
 * @see {@link https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/|Firefox Add-ons}.
 * @see {@link https://microsoftedge.microsoft.com/addons/detail/redux-devtools/nnkgneoiohoecpdiaponcejilbhhikei|Edge Add-ons}.
 */
const enhancer = devToolsEnhancer();

/**
 * A store that holds the whole state tree of the application.
 */
const store = createStore(rootReducer, enhancer);

export default store;