local printColor = {
    error =  '^1[error]^7',
    warn =   '^3[warning]^7',
    info =   '^2[info]^7',
    debug =  '^6[debug]^7',
}

function Debug(msg, level)
    if not Config.Debug then return end
     level = level or 'info'
     local resourceName = GetCurrentResourceName()
     print("^4[" .. resourceName .. "] " .. printColor[level] .. ' ' .. msg)
end