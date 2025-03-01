--[[

    Variables

]]

local listening = false
local currentPrompt = nil

local EVENTS = {
    LOCKERS = 1,
    CLOTHING = 2,
    SWITCHER = 3,
    EVIDENCE = 4,
    TRASH = 5,
    ARMORY = 6,
}

local zoneData = {
    mrpd_clothing_lockers = {
        promptText = "[E] Closet & Clothing",
        menuData = {
            {
                title = "Cabinet",
                description = "Access your personal locker",
                action = "caue-police:handler",
                params = EVENTS.LOCKERS
            },
            {
                title = "Clothes",
                description = "Choose your outfit",
                action = "caue-police:handler",
                params = EVENTS.CLOTHING
            }
        }
    },
    mrpd_armory = {
        promptText = "[E] Weapon"
    },
    mrpd_evidence = {
        promptText = "[E] Evidence"
    },
    mrpd_trash = {
        promptText = "[E] Trash"
    },
    mrpd_character_switcher = {
        promptText = "[E] Change Character",
        menuData = {
            {
                title = "Change Character",
                description = "Go bowling with your uncle",
                action = "caue-police:handler",
                params = EVENTS.SWITCHER
            }
        }
    },

    vbpd_armory_evidence = {
        promptText = "[E] Weapon & Evidence",
        menuData = {
            {
                title = "Weapon",
                description = "AED - Weapons, Equipment, Fun!",
                action = "caue-police:handler",
                params = EVENTS.ARMORY
            },
            {
                title = "Evidence",
                description = "Evidence locker",
                action = "caue-police:handler",
                params = EVENTS.EVIDENCE
            },
            {
                title = "Trash",
                description = 'Where the "Spaghetti Code" remains',
                action = "caue-police:handler",
                params = EVENTS.TRASH
            },
        }
    },
    vbpd_lockers_clothing = {
        promptText = "[E] Closet & Clothing",
        menuData = {
            {
                title = "Closet",
                description = "Access personal locker",
                action = "caue-police:handler",
                params = EVENTS.LOCKERS
            },
            {
                title = "Clothes",
                description = "Change clothes",
                action = "caue-police:handler",
                params = EVENTS.CLOTHING
            },
            {
                title = "Change Character",
                description = "The bahianinho will give a mismatch in the net 😴",
                action = "caue-police:handler",
                params = EVENTS.SWITCHER
            },
        }
    },

    doc_lockers = {
        promptText = "[E] Closet & Clothing",
        menuData = {
            {
                title = "Cabinet",
                description = "Access your personal locker",
                action = "caue-police:handler",
                params = EVENTS.LOCKERS
            },
            {
                title = "Clothes",
                description = "Choose your outfit",
                action = "caue-police:handler",
                params = EVENTS.CLOTHING
            },
            {
                title = "Change Character",
                description = "Go bowling with your uncle",
                action = "caue-police:handler",
                params = EVENTS.SWITCHER
            },
        }
    },
    doc_armory = {
        promptText = "[E] Weapon"
    },
    doc_trash = {
        promptText = "[E] Lixo"
    },
}

local currentClassRoomBoardUrl = "https://cdn.discordapp.com/attachments/929484136572387339/936710819910156408/unknown.png"
local currentMeetingRoomBoardUrl = "https://cdn.discordapp.com/attachments/929484136572387339/936710819910156408/unknown.png"
local inClassRoom, inMeetingRoom = false, false

--[[

    Functions

]]

local function listenForKeypress(pZone, pAction)
    listening = true

    Citizen.CreateThread(function()
        while listening do
            if IsControlJustReleased(0, 38) then
                if pAction == "context" then
                    exports["caue-context"]:showContext(zoneData[pZone].menuData)
                elseif pAction == "armory"  then
                    TriggerEvent("server-inventory-open", "10", "Shop")
                elseif pAction == "trash" then
                    TriggerEvent("server-inventory-open", "1", pZone)
                elseif pAction == "evidence" then
                    TriggerEvent("server-inventory-open", "1", pZone)
                    TriggerServerEvent("InteractSound_SV:PlayWithinDistance", 3.0, "LockerOpen", 0.4)
                end
            end

            Citizen.Wait(1)
        end
    end)
end

--[[

    Events

]]

AddEventHandler("caue-polyzone:enter", function(pZoneName, pZoneData)
    if pZoneName == "caue-police:zone" then
        if exports["caue-base"]:getChar("job") == pZoneData.job then
            currentPrompt = pZoneData.zone
            exports["caue-interaction"]:showInteraction(zoneData[pZoneData.zone].promptText)
            listenForKeypress(pZoneData.zone, pZoneData.action)
        end
    elseif pZoneName == "mrpd_classroom" then
        if not dui then
            dui = exports["caue-lib"]:getDui(currentClassRoomBoardUrl)
            AddReplaceTexture("prop_planning_b1", "prop_base_white_01b", dui.dictionary, dui.texture)
        else
            exports["caue-lib"]:changeDuiUrl(dui.id, currentClassRoomBoardUrl)
        end
        inClassRoom = true
    elseif zone == "mrpd_meetingroom" then
        if not dui then
          dui = exports["caue-lib"]:getDui(currentMeetingRoomBoardUrl)
          AddReplaceTexture("prop_planning_b1", "prop_base_white_01b", dui.dictionary, dui.texture)
        else
          exports["caue-lib"]:changeDuiUrl(dui.id, currentMeetingRoomBoardUrl)
        end
        inMeetingRoom = true
    end
end)

AddEventHandler("caue-polyzone:exit", function(pZoneName, pZoneData)
    if pZoneName == "caue-police:zone" then
        exports["caue-interaction"]:hideInteraction()
        listening = false
        currentPrompt = nil
    elseif pZoneName == "mrpd_classroom" then
        RemoveReplaceTexture("prop_planning_b1", "prop_base_white_01b")
        if dui ~= nil then
            exports["caue-lib"]:releaseDui(dui.id)
            dui = nil
        end
        inClassRoom = false
    elseif zone == "mrpd_meetingroom" then
        RemoveReplaceTexture("prop_planning_b1", "prop_base_white_01b")
        if dui ~= nil then
            exports["caue-lib"]:releaseDui(dui.id)
            dui = nil
        end
        inMeetingRoom = false
    end
end)

AddEventHandler("caue-police:handler", function(eventData)
    local job = exports["caue-base"]:getChar("job")

    local location = currentPrompt ~= nil and string.match(currentPrompt, "(.-)_") or ""

    if eventData == EVENTS.LOCKERS and exports["caue-jobs"]:getJob(job, "is_police") then
        local cid = exports["caue-base"]:getChar("id")
        TriggerEvent("server-inventory-open", "1", ("personalStorage-%s-%s"):format(location, cid))
        TriggerServerEvent("InteractSound_SV:PlayWithinDistance", 3.0, "LockerOpen", 0.4)
    elseif eventData == EVENTS.CLOTHING then
        exports["caue-interaction"]:hideInteraction()
        Wait(500)
        TriggerEvent("raid_clothes:openClothing", true, true)
    elseif eventData == EVENTS.SWITCHER then
        TriggerEvent("apartments:Logout")
    elseif eventData == EVENTS.EVIDENCE and exports["caue-jobs"]:getJob(job, "is_police") then
        if job == "cid" then
            local input = exports["caue-input"]:showInput({
                {
                    icon = "hashtag",
                    label = "Case ID",
                    name = "id",
                },
            })

            if input["id"] then
                TriggerEvent("server-inventory-open", "1", ("%s_evidence"):format(input["id"]))
            end
        else
            TriggerEvent("server-inventory-open", "1", ("%s_evidence"):format(location))
        end
    elseif eventData == EVENTS.TRASH and exports["caue-jobs"]:getJob(job, "is_police") then
        TriggerEvent("server-inventory-open", "1", ("%s_trash"):format(location))
    elseif eventData == EVENTS.ARMORY and exports["caue-jobs"]:getJob(job, "is_police") then
        if job == "cid" then
            TriggerEvent("server-inventory-open", "11", "Shop")
        else
            TriggerEvent("server-inventory-open", "10", "Shop")
        end
    end
end)

AddEventHandler("caue-polce:changewhiteboardurl", function(pParams)
    local input = exports["caue-input"]:showInput({
        {
            icon = "link",
            label = "URL",
            name = "url",
        },
    })

    if input["url"] then
        TriggerServerEvent("police:changewhiteboard", input["url"], pParams.room)
    end
end)

RegisterNetEvent("police:changewhiteboardcli")
AddEventHandler("police:changewhiteboardcli", function(pUrl, pRoom)
    if pRoom == "classroom" then
        currentClassRoomBoardUrl = pUrl

        if inClassRoom and dui then
            exports["caue-lib"]:changeDuiUrl(dui.id, currentClassRoomBoardUrl)
        end
    elseif pRoom == "meetingroom" and inMeetingRoom and dui then
        currentMeetingRoomBoardUrl = pUrl

        if inMeetingRoom and dui then
            exports["caue-lib"]:changeDuiUrl(dui.id, currentMeetingRoomBoardUrl)
        end
    end
end)

--[[

    Threads

]]

Citizen.CreateThread(function()
    -- MRPD Classroom
    exports["caue-polyzone"]:AddPolyZone("mrpd_classroom", {
        vector2(448.41372680664, -990.47613525391),
        vector2(439.50704956055, -990.55731201172),
        vector2(439.43478393555, -981.08758544922),
        vector2(448.419921875, -981.26306152344),
        vector2(450.23190307617, -983.00885009766),
        vector2(450.25042724609, -988.77667236328)
    }, {
        gridDivisions = 25,
        minZ = 34.04,
        maxZ = 37.69,
    })

    exports["caue-polyzone"]:AddBoxZone("mrpd_meetingroom", vector3(474.07, -995.08, 30.69), 10.2, 5.2, {
        heading=0,
        minZ=29.64,
        maxZ=32.84
    })

    -- MRPD Lockers
    exports["caue-polyzone"]:AddBoxZone("caue-police:zone", vector3(461.81, -997.79, 30.69), 4.4, 4.8, {
        heading = 0,
        minZ = 29.64,
        maxZ = 32.84,
        data = {
            job = "police",
            action = "context",
            zone = "mrpd_clothing_lockers",
        },
    })

    -- MRPD Armory
    exports["caue-polyzone"]:AddBoxZone("caue-police:zone", vector3(481.59, -995.35, 30.69), 3.2, 0.8, {
        heading = 90,
        minZ = 29.69,
        maxZ = 32.49,
        data = {
            job = "police",
            action = "armory",
            zone = "mrpd_armory",
        },
    })

    -- MRPD Evidence
    exports["caue-polyzone"]:AddBoxZone("caue-police:zone", vector3(474.84, -996.26, 26.27), 1.2, 3.0, {
        heading = 90,
        minZ = 25.27,
        maxZ = 27.87,
        data = {
            job = "police",
            action = "evidence",
            zone = "mrpd_evidence",
        },
    })

    -- MRPD Trash
    exports["caue-polyzone"]:AddBoxZone("caue-police:zone", vector3(472.88, -996.28, 26.27), 1.2, 3.0, {
        heading = 90,
        minZ = 25.27,
        maxZ = 27.87,
        data = {
            job = "police",
            action = "trash",
            zone = "mrpd_trash",
        },
    })

    -- MRPD Character Switcher
    exports["caue-polyzone"]:AddBoxZone("caue-police:zone", vector3(478.88, -983.49, 30.69), 1.35, 1.3, {
        heading = 0,
        minZ = 29.74,
        maxZ = 32.74,
        data = {
            job = "police",
            action = "context",
            zone = "mrpd_character_switcher",
        },
    })

    -- VBPD Armory & Evidence
    exports["caue-polyzone"]:AddBoxZone("caue-police:zone", vector3(-1076.71, -828.81, 19.3), 6.6, 4.6, {
        heading=38,
        minZ=18.3,
        maxZ=21.5,
        data = {
            job = "cid",
            action = "context",
            zone = "vbpd_armory_evidence",
        },
    })

    -- VBPD Lockers & Clothing
    exports["caue-polyzone"]:AddBoxZone("caue-police:zone", vector3(-1086.98, -831.58, 19.3), 9.2, 5.4, {
        heading=38,
		minZ=18.3,
		maxZ=21.7,
        data = {
            job = "cid",
            action = "context",
            zone = "vbpd_lockers_clothing",
        },
    })

    -- DOC Lockers
    exports["caue-polyzone"]:AddBoxZone("caue-police:zone", vector3(1770.14, 2517.32, 45.83), 4.15, 0.75, {
        heading = 30,
        minZ = 44.83,
        maxZ = 47.43,
        data = {
            job = "doc",
            action = "context",
            zone = "doc_lockers",
        },
    })

    -- DOC Armory
    exports["caue-polyzone"]:AddBoxZone("caue-police:zone", vector3(1771.97, 2514.02, 45.83), 1.0, 0.65, {
        heading = 30,
        minZ = 44.83,
        maxZ = 47.43,
        data = {
            job = "doc",
            action = "armory",
            zone = "doc_armory",
        },
    })

    -- DOC Trash
    exports["caue-polyzone"]:AddCircleZone("caue-police:zone", vector3(1771.26, 2497.24, 50.43), 0.4, {
        useZ = true,
        data = {
            job = "doc",
            action = "trash",
            zone = "doc_trash",
        },
    })

    -- MRPD Screen
    exports["caue-polytarget"]:AddBoxZone("mrdp_change_picture", vector3(439.44, -985.89, 34.97), 1.0, 0.4, {
        heading=0,
        minZ=35.37,
        maxZ=36.17
    })

    exports["caue-polytarget"]:AddBoxZone("mrpd_meetingroom_screen", vector3(474.02, -1000.06, 30.69), 0.05, 2.6, {
        heading=0,
        minZ=30.54,
        maxZ=32.49
    })

    exports["caue-eye"]:AddPeekEntryByPolyTarget("mrdp_change_picture", {{
        event = "caue-polce:changewhiteboardurl",
        id = "polcechangewhiteboardurlc",
        icon = "circle",
        label = "Change URL",
        parameters = {
            room = "classroom"
        }
    }}, { distance = { radius = 2.5 } })

    exports["caue-eye"]:AddPeekEntryByPolyTarget("mrpd_meetingroom_screen", {{
        event = "caue-polce:changewhiteboardurl",
        id = "polcechangewhiteboardurlm",
        icon = "circle",
        label = "Change URL",
        parameters = {
            room = "meetingroom"
        }
    }}, { distance = { radius = 2.5 } })
end)