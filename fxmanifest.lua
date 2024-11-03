fx_version 'cerulean'
games { 'gta5' }

author '@aw3rque'
description 'Hacking Minigames for 0Resmon.'
version '1.0.0'

ui_page 'ui/index.html'

files {
    'ui/index.html',
    'ui/*.css',
    'ui/*.js',
    'ui/images/*.png',
    'ui/images/*.svg',
    'ui/fonts/*.ttf',
    'ui/fonts/*.otf',
}

client_scripts {
    'client.lua',
}

shared_scripts {
    'config.lua',
    '@ox_lib/init.lua',
    'cl_debug.lua'
}


lua54 'yes'

escrow_ignore {
    'fxmanifest.lua',
    'cl_debug.lua',
    'config.lua',
    'client.lua',
    'ui/index.html',
    'ui/*.css',
    'ui/*.js',
    'ui/images/*.png',
    'ui/images/*.svg',
}

exports 'RandomNumbers'

exports 'BruteForce'

exports 'DoAllOfThem'

dependency '/assetpacks'

dependency 'ox_lib'
dependency '/assetpacks'