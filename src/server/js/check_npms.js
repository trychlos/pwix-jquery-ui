/*
 * pwix:jquery-ui/src/server/js/check_npms.js
 */

import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

if( false ){
    require( 'jquery-ui-dist/package.json' );
}

checkNpmVersions({
    'jquery-ui-dist': '^1.13.2'
}, 'pwix:jquery-ui' );
