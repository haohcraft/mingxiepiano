import postcss from 'postcss';
import parseMixins from 'postcss-sassy-mixins';
import breakpoints from './breakpoints';
import _ from 'lodash';

const cMixins = postcss.plugin('postcss-ming-mixins', () => (css) => (
    parseMixins({
        mixins: _.assign(breakpoints)
    })(css)
));
export default cMixins;
