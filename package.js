Package.describe({
    name: 'pwix:jquery-ui',
    version: '1.0.1-rc',
    summary: 'A jQuery UI Meteor package',
    git: 'https://github.com/trychlos/pwix-jquery-ui',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
    api.mainModule( 'src/server/js/index.js', 'server' );
    api.addFiles( 'resources/css/jquery-ui.css', 'client' );
    api.addAssets([
        'resources/png/ui-icons_444444_256x240.png',
        'resources/png/ui-icons_555555_256x240.png',
        'resources/png/ui-icons_777620_256x240.png',
        'resources/png/ui-icons_777777_256x240.png',
        'resources/png/ui-icons_cc0000_256x240.png',
        'resources/png/ui-icons_ffffff_256x240.png'
    ], 'client' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:jquery-ui' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    api.versionsFrom( '2.9.0' );
    api.use( 'ecmascript' );
    api.use( 'less@4.0.0', 'client' );
    api.use( 'tmeasday:check-npm-versions@1.0.2', 'server' );
}

// NPM dependencies are checked in /src/server/js/check_npms.js
// See also https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies
