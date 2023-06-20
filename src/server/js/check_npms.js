/*
 * pwix:jquery-ui/src/server/js/check_npms.js
 */

import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

if( false ){
    require( 'jquery-ui/package.json' );
}

checkNpmVersions({
    'jquery-ui': '^1.13.2'
},
    'pwix:jquery-ui'
);
