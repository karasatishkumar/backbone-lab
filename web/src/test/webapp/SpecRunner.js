require.config({
    urlArgs: 'cb=' + Math.random(),
    paths: {
        jquery: '../../main/webapp/js/libs/jquery-1.9.1',
        jasmine: 'lib/jasmine/lib/jasmine',
        'jasmine-html': 'js/libs/jasmine-html',
        spec: 'test/spec/'
    },
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});