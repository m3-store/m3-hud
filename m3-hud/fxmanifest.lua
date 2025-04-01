fx_version 'cerulean'
game 'gta5'
lua54 "yes"
author 'Custom Hud By PIXEL DEV'
description 'Hud Custom FOR PIXEL DESIGN'
version '1.0.0'
client_script 'client/*.lua'
server_script 'server/*.lua'
shared_script 'config.lua'
ui_page 'html/index.html'
files {
    'html/*.html',
    'html/*.css',
    'html/*.js',
    'html/*.jpg'
}


escrow_ignore {
    'config.lua',
}
dependency '/assetpacks'