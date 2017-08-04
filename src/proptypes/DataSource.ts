import * as PropTypes from 'prop-types';

export const dataSourcePropTypes = PropTypes.shape({
    getData: PropTypes.func.isRequired,
    getFingerprint: PropTypes.func.isRequired
});