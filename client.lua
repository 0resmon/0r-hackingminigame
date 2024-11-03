Debug("script started - [client]", "debug")


local laptop
RegisterNetEvent("0resmon:anim:Hacking")
AddEventHandler("0resmon:anim:Hacking", function()
    local animDict = "anim@heists@ornate_bank@hack"

    RequestAnimDict(animDict)
    RequestModel("hei_prop_hst_laptop")
    RequestModel("hei_p_m_bag_var22_arm_s")
    RequestModel("hei_prop_heist_card_hack_02")

    while not HasAnimDictLoaded(animDict)
        or not HasModelLoaded("hei_prop_hst_laptop")
        or not HasModelLoaded("hei_p_m_bag_var22_arm_s")
        or not HasModelLoaded("hei_prop_heist_card_hack_02") do
        Citizen.Wait(100)
    end

    local ped = PlayerPedId()
    local pedCoordination = GetEntityCoords(ped)
    local targetPosition = vector3(pedCoordination.x, pedCoordination.y, pedCoordination.z)  -- Karakterin mevcut konumu
    local targetRotation = vec3(GetEntityRotation(ped))

    -- Mevcut pozisyona göre animasyon pozisyonlarını ayarlayın
    local animPos = GetAnimInitialOffsetPosition(animDict, "hack_enter", targetPosition.x, targetPosition.y, targetPosition.z + 0.8, 0, 0, 0, 0, 2)
    local animPos2 = GetAnimInitialOffsetPosition(animDict, "hack_loop", targetPosition.x, targetPosition.y, targetPosition.z + 0.8, 0, 0, 0, 0, 2)
    local animPos3 = GetAnimInitialOffsetPosition(animDict, "hack_exit", targetPosition.x, targetPosition.y, targetPosition.z + 0.8, 0, 0, 0, 0, 2)

    -- part1
    -- FreezeEntityPosition(ped, true)
    local netScene = NetworkCreateSynchronisedScene(animPos, targetRotation, 2, false, false, 1065353216, 0, 1.3)
    NetworkAddPedToSynchronisedScene(ped, netScene, animDict, "hack_enter", 1.5, -4.0, 1, 16, 1148846080, 0)
    
    laptop = CreateObject(GetHashKey("hei_prop_hst_laptop"), targetPosition, 1, 1, 0)
    NetworkAddEntityToSynchronisedScene(laptop, netScene, animDict, "hack_enter_laptop", 4.0, -8.0, 1)

    -- part2
    local netScene2 = NetworkCreateSynchronisedScene(animPos2, targetRotation, 2, false, false, 1065353216, 0, 1.3)
    NetworkAddPedToSynchronisedScene(ped, netScene2, animDict, "hack_loop", 1.5, -4.0, 1, 16, 1148846080, 0)
    NetworkAddEntityToSynchronisedScene(laptop, netScene2, animDict, "hack_loop_laptop", 4.0, -8.0, 1)

    -- part3
    local netScene3 = NetworkCreateSynchronisedScene(animPos3, targetRotation, 2, false, false, 1065353216, 0, 1.3)
    NetworkAddPedToSynchronisedScene(ped, netScene3, animDict, "hack_exit", 1.5, -4.0, 1, 16, 1148846080, 0)
    NetworkAddEntityToSynchronisedScene(laptop, netScene3, animDict, "hack_exit_laptop", 4.0, -8.0, 1)

    -- Animasyonları başlatın
    NetworkStartSynchronisedScene(netScene)
    Citizen.Wait(4500)
    NetworkStopSynchronisedScene(netScene)

    NetworkStartSynchronisedScene(netScene2)
    Citizen.Wait(4500)
    NetworkStopSynchronisedScene(netScene2)
end)



RegisterNetEvent("0resmon:anim:CloseAnim", function()
    if Config.Animation then
        local animDict = "anim@heists@ornate_bank@hack"

        RequestAnimDict(animDict)
        RequestModel("hei_prop_hst_laptop")
        RequestModel("hei_p_m_bag_var22_arm_s")
        RequestModel("hei_prop_heist_card_hack_02")

        while not HasAnimDictLoaded(animDict)
            or not HasModelLoaded("hei_prop_hst_laptop")
            or not HasModelLoaded("hei_p_m_bag_var22_arm_s")
            or not HasModelLoaded("hei_prop_heist_card_hack_02") do
            Citizen.Wait(100)
        end


        local ped = PlayerPedId()
        local pedCoordination = GetEntityCoords(ped)
        local targetPosition = vector3(pedCoordination.x, pedCoordination.y, pedCoordination.z)  -- Karakterin mevcut konumu
        local targetRotation = vec3(GetEntityRotation(ped)) 
        local animPos3 = GetAnimInitialOffsetPosition(animDict, "hack_exit", targetPosition.x, targetPosition.y, targetPosition.z + 0.8, 0, 0, 0, 0, 2)

        local netScene3 = NetworkCreateSynchronisedScene(animPos3, targetRotation, 2, false, false, 1065353216, 0, 1.3)
        NetworkAddPedToSynchronisedScene(ped, netScene3, animDict, "hack_exit", 1.5, -4.0, 1, 16, 1148846080, 0)
        NetworkStartSynchronisedScene(netScene3)

        DeleteObject(laptop)
        FreezeEntityPosition(ped, false)
        -- SetPedComponentVariation(ped, 5, 45, 0, 0) -- çantayı pede geri veriyor // gives bag back to ped
        -- TriggerEvent("0resmon:anim:Hacking")
    end
end)


local locales = {
    MyComputer = Config.Locales['MyComputer'].text,
    Power = Config.Locales['Power'].text,
    HackConnextExeTitle = Config.Locales['HackConnextExeTitle'].text,
    LocalC = Config.Locales['LocalC'].text,
    GlobalNetwork = Config.Locales['GlobalNetwork'].text,
    ExternalDeviceD = Config.Locales['ExternalDeviceD'].text,
    ExternalDeviceTitle = Config.Locales['ExternalDeviceTitle'].text,
    HackConnectExeMinigame = Config.Locales['HackConnectExeMinigame'].text,
    BruteForceConnectExeMinigame = Config.Locales['BruteForceConnectExeMinigame'].text,
    Compromissingglobalsecurityoneslipatatime = Config.Locales['Compromissingglobalsecurityoneslipatatime'].text,
    ipadress = Config.Locales['ipadress'].text,
    backDoorText = Config.Locales['backDoorText'].text
}

local times = {
    BruteForceTime = Config.Times['BruteForceTime'],
    RandomNumbersTime = Config.Times['RandomNumbersTime'],
    BruteForceSpeed = Config.Times['BruteForceSpeed'],
    RandomNumbersSpeed = Config.Times['RandomNumbersSpeedHack']
}

local chances = {
    BruteForceChance = Config.Chances['BruteForceChance'],
    RandomNumbersChance = Config.Chances['RandomNumbersChance']
}

local jsonTexts = json.encode(locales)
local jsonTimes = json.encode(times)
local jsonChances = json.encode(chances)


local success = nil  
exports("RandomNumbers", function()
    success = nil
    SetNuiFocus(true, true)
    SendNUIMessage({
        showRandomNumbers = true,
        locales = jsonTexts,
        times = jsonTimes,
        chances = jsonChances
    })
    
    while success == nil do
        Citizen.Wait(1)
    end
    
    -- SetNuiFocus(false, false)  -- Ensure focus is reset
    return success
end)

RegisterNUICallback('endTask', function(data)
    success = data.success
end)

RegisterCommand("testminigame", function()
    if Config.Animation then
        TriggerEvent("0resmon:anim:Hacking")
    end
    Wait(7500)
    local minigame = exports['0r_hackingminigame']:RandomNumbers()  
    if minigame then
        -- print("dasdsadsa")
        lib.notify(
            {
                title = "Random Numbers Minigame",
                description = "You have successfully completed the minigame.",
                type = "success",
                position = "center-right",
                duration = 7500
            }
        )
    else
        -- print("dsadfsadfsa")
        lib.notify(
            {
                title = "Random Numbers Minigame",
                description = "You have failed the minigame.",
                type = "error",
                position = "center-right",
                duration = 7500
            }
        )
    end
end)

local successBruteForce = nil
exports("BruteForce", function()
    successBruteForce = nil
    SetNuiFocus(true, true)
    
    -- NUI Mesajını temizleyin ve yeniden gönderin
    SendNUIMessage({
        showBruteForce = true,
        locales = jsonTexts,
        times = jsonTimes,
        chances = jsonChances
    })
    while successBruteForce == nil do
        Citizen.Wait(1)
    end

    -- print("BruteForce function ending, successBruteForce: " .. tostring(successBruteForce))
    return successBruteForce
end)

RegisterNUICallback('endTaskBruteForce', function(data)
    successBruteForce = data.success
    -- print("BruteForce result in callback: " .. tostring(successBruteForce))
end)

RegisterNUICallback('NotifyResmon', function(data)
    lib.notify(
        {
            title = "Notify",
            description = data.notify,
            type = "success",
            position = "center-right",
            duration = 7500
        }
    )
end)

RegisterCommand("testminigame2", function()
    -- print("Starting testminigame2")
    if Config.Animation then
        TriggerEvent("0resmon:anim:Hacking")
    end
    Wait(7500)
    local minigame = exports['0r_hackingminigame']:BruteForce()   

    -- print("Minigame result: " .. tostring(minigame))

    if minigame then
        lib.notify(
            {
                title = "Bruteforce Minigame",
                description = "You have successfully completed the minigame.",
                type = "success",
                position = "center-right",
                duration = 7500
            }
        )
    else
        lib.notify(
            {
                title = "Bruteforce Minigame",
                description = "You have failed the minigame.",
                type = "error",
                position = "center-right",
                duration = 7500
            }
        )
    end
end)












-- DO ALL OF THEM CALLBACK

SuccessDidAllOfThem = nil
exports("DoAllOfThem", function()
    SuccessDidAllOfThem = nil
    SetNuiFocus(true, true)
    SendNUIMessage({
        NeedToDoEverything = true,
        locales = jsonTexts,
        times = jsonTimes,
        chances = jsonChances
    })
    while (SuccessDidAllOfThem == nil) do
        Citizen.Wait(1)
    end
    return SuccessDidAllOfThem
end)

RegisterNUICallback('DidEverything', function(data)
    SuccessDidAllOfThem = data.success
    if data.success == false then
        -- print("FAILED AND RETURNED NIL FROM DoAllOfThem")
        SuccessDidAllOfThem = nil
    end
end)

local minigame3started = false 
RegisterCommand("testminigame3", function()
    if Config.Animation then
        TriggerEvent("0resmon:anim:Hacking")
    end
    Wait(7500)

    if minigame3started == false then 
        minigame3started = true 
        local minigame = exports['0r_hackingminigame']:DoAllOfThem()   
        if minigame then
            minigame3started = false 
            lib.notify(
                {
                    title = "Minigames",
                    description = "You have successfully completed the minigames.",
                    type = "success",
                    position = "center-right",
                    duration = 7500
                }
            )
        else
            minigame3started = false 
            lib.notify(
                {
                    title = "Minigames",
                    description = "You have failed the minigames.",
                    type = "error",
                    position = "center-right",
                    duration = 7500
                }
            )
        end
    else 
        SendNUIMessage({
            justopen=true,
        })
        SetNuiFocus(true, true)
    end 
end)









-- CLOSE CALLBACK

RegisterNUICallback('close', function(data)
    SetNuiFocus(false , false)
    TriggerEvent("0resmon:anim:CloseAnim")
end)