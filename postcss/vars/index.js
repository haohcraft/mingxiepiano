import postcss from 'postcss';
import vars from 'postcss-advanced-variables';
import _ from 'lodash';
import color from './color';

const cVars = postcss.plugin('postcss-ming-vars', () => (
    vars({
        variables: _.assign(color)
    })
));

export default cVars;
