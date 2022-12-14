
let _tmpGearPowerId = 0;
const GearPowerId = {
    None: _tmpGearPowerId++,
    Ability_Doubler: _tmpGearPowerId++,
    Comeback: _tmpGearPowerId++,
    Drop_Roller: _tmpGearPowerId++,
    Haunt: _tmpGearPowerId++,
    Ink_Recovery_Up: _tmpGearPowerId++,
    Ink_Resistance_Up: _tmpGearPowerId++,
    Ink_Saver_Main: _tmpGearPowerId++,
    Ink_Saver_Sub: _tmpGearPowerId++,
    Intensify_Action: _tmpGearPowerId++,
    LastDitch_Effort: _tmpGearPowerId++,
    Ninja_Squid: _tmpGearPowerId++,
    Object_Shredder: _tmpGearPowerId++,
    Opening_Gambit: _tmpGearPowerId++,
    Quick_Respawn: _tmpGearPowerId++,
    Quick_Super_Jump: _tmpGearPowerId++,
    Respawn_Punisher: _tmpGearPowerId++,
    Run_Speed_Up: _tmpGearPowerId++,
    Special_Charge_Up: _tmpGearPowerId++,
    Special_Power_Up: _tmpGearPowerId++,
    Special_Saver: _tmpGearPowerId++,
    Stealth_Jump: _tmpGearPowerId++,
    Sub_Power_Up: _tmpGearPowerId++,
    Sub_Resistance_Up: _tmpGearPowerId++,
    Swim_Speed_Up: _tmpGearPowerId++,
    Tenacity: _tmpGearPowerId++,
    Thermal_Ink: _tmpGearPowerId++,
};

const HeadOnlyGearPowers = [
    GearPowerId.Comeback,
    GearPowerId.LastDitch_Effort,
    GearPowerId.Opening_Gambit,
    GearPowerId.Tenacity,
];

const BodyOnlyGearPowers = [
    GearPowerId.Ability_Doubler,
    GearPowerId.Haunt,
    GearPowerId.Ninja_Squid,
    GearPowerId.Respawn_Punisher,
    GearPowerId.Thermal_Ink,
];

const FootOnlyGearPowers = [
    GearPowerId.Drop_Roller,
    GearPowerId.Object_Shredder,
    GearPowerId.Stealth_Jump,
];

function __getSubGearPowers() {
    let result = [];
    for (let key in GearPowerId) {
        let id = GearPowerId[key];
        if (FootOnlyGearPowers.some(x => x === id)
            || BodyOnlyGearPowers.some(x => x === id)
            || HeadOnlyGearPowers.some(x => x === id)
        ) {
            continue;
        }

        result.push(id);
    }
    return result;
}

const SubGearPowers = __getSubGearPowers();
const HeadMainGearPowers = SubGearPowers.concat(HeadOnlyGearPowers);
const BodyMainGearPowers = SubGearPowers.concat(BodyOnlyGearPowers);
const FootMainGearPowers = SubGearPowers.concat(FootOnlyGearPowers);

const GearType = {
    Head: 0,
    Body: 1,
    Foot: 2,
}

const GearPowerNames = {}
GearPowerNames[GearPowerId.None] = "??????";
GearPowerNames[GearPowerId.Ability_Doubler] = "???????????????????????????"
GearPowerNames[GearPowerId.Comeback] = "???????????????"
GearPowerNames[GearPowerId.Drop_Roller] = "????????????"
GearPowerNames[GearPowerId.Haunt] = "????????????"
GearPowerNames[GearPowerId.Ink_Recovery_Up] = "???????????????????????????"
GearPowerNames[GearPowerId.Ink_Resistance_Up] = "???????????????????????????"
GearPowerNames[GearPowerId.Ink_Saver_Main] = "????????????????????????(?????????)"
GearPowerNames[GearPowerId.Ink_Saver_Sub] = "????????????????????????(??????)"
GearPowerNames[GearPowerId.Intensify_Action] = "?????????????????????"
GearPowerNames[GearPowerId.LastDitch_Effort] = "?????????????????????"
GearPowerNames[GearPowerId.Ninja_Squid] = "??????????????????"
GearPowerNames[GearPowerId.Object_Shredder] = "????????????????????????"
GearPowerNames[GearPowerId.Opening_Gambit] = "????????????????????????"
GearPowerNames[GearPowerId.Quick_Respawn] = "??????????????????"
GearPowerNames[GearPowerId.Quick_Super_Jump] = "????????????????????????????????????"
GearPowerNames[GearPowerId.Respawn_Punisher] = "??????????????????????????????"
GearPowerNames[GearPowerId.Run_Speed_Up] = "???????????????????????????"
GearPowerNames[GearPowerId.Special_Charge_Up] = "?????????????????????????????????"
GearPowerNames[GearPowerId.Special_Power_Up] = "??????????????????????????????"
GearPowerNames[GearPowerId.Special_Saver] = "?????????????????????????????????"
GearPowerNames[GearPowerId.Stealth_Jump] = "????????????????????????"
GearPowerNames[GearPowerId.Sub_Power_Up] = "?????????????????????"
GearPowerNames[GearPowerId.Sub_Resistance_Up] = "??????????????????"
GearPowerNames[GearPowerId.Swim_Speed_Up] = "?????????????????????????????????"
GearPowerNames[GearPowerId.Tenacity] = "????????????"
GearPowerNames[GearPowerId.Thermal_Ink] = "?????????????????????"



const GearNames = {}
GearNames[GearType.Head] = "?????????";
GearNames[GearType.Body] = "??????";
GearNames[GearType.Foot] = "??????";

// ============================
// ?????????
// ============================

function __createSelect2Options(dict) {
    let result = [];
    for (let key in dict) {
        result.push({ id: key, text: dict[key] });
    }
    return result;
}
const WeaponOptions = __createSelect2Options(MainWeaponNames);

function __createSelect2OptionsFromIdList(ids, idToNameDict) {
    let result = [];
    for (let id of ids) {
        result.push({ id: id, text: idToNameDict[id] });
    }
    return result;
}

const GearPowerOptions = __createSelect2OptionsFromIdList(SubGearPowers, GearPowerNames);
const HeadMainGearPowerOptions = __createSelect2OptionsFromIdList(HeadMainGearPowers, GearPowerNames);
const BodyMainGearPowerOptions = __createSelect2OptionsFromIdList(BodyMainGearPowers, GearPowerNames);
const FootMainGearPowerOptions = __createSelect2OptionsFromIdList(FootMainGearPowers, GearPowerNames);


// ============================
// ?????????????????????
// ============================
const GearPowerThumbNames = {}
GearPowerThumbNames[GearPowerId.Ability_Doubler] = "48px-S3_Ability_Ability_Doubler.png"
GearPowerThumbNames[GearPowerId.Comeback] = "48px-S3_Ability_Comeback.png"
GearPowerThumbNames[GearPowerId.Drop_Roller] = "48px-S3_Ability_Drop_Roller.png"
GearPowerThumbNames[GearPowerId.Haunt] = "48px-S3_Ability_Haunt.png"
GearPowerThumbNames[GearPowerId.Ink_Recovery_Up] = "48px-S3_Ability_Ink_Recovery_Up.png"
GearPowerThumbNames[GearPowerId.Ink_Resistance_Up] = "48px-S3_Ability_Ink_Resistance_Up.png"
GearPowerThumbNames[GearPowerId.Ink_Saver_Main] = "48px-S3_Ability_Ink_Saver_(Main).png"
GearPowerThumbNames[GearPowerId.Ink_Saver_Sub] = "48px-S3_Ability_Ink_Saver_(Sub).png"
GearPowerThumbNames[GearPowerId.Intensify_Action] = "48px-S3_Ability_Intensify_Action.png"
GearPowerThumbNames[GearPowerId.LastDitch_Effort] = "48px-S3_Ability_Last-Ditch_Effort.png"
GearPowerThumbNames[GearPowerId.Ninja_Squid] = "48px-S3_Ability_Ninja_Squid.png"
GearPowerThumbNames[GearPowerId.Object_Shredder] = "48px-S3_Ability_Object_Shredder.png"
GearPowerThumbNames[GearPowerId.Opening_Gambit] = "48px-S3_Ability_Opening_Gambit.png"
GearPowerThumbNames[GearPowerId.Quick_Respawn] = "48px-S3_Ability_Quick_Respawn.png"
GearPowerThumbNames[GearPowerId.Quick_Super_Jump] = "48px-S3_Ability_Quick_Super_Jump.png"
GearPowerThumbNames[GearPowerId.Respawn_Punisher] = "48px-S3_Ability_Respawn_Punisher.png"
GearPowerThumbNames[GearPowerId.Run_Speed_Up] = "48px-S3_Ability_Run_Speed_Up.png"
GearPowerThumbNames[GearPowerId.Special_Charge_Up] = "48px-S3_Ability_Special_Charge_Up.png"
GearPowerThumbNames[GearPowerId.Special_Power_Up] = "48px-S3_Ability_Special_Power_Up.png"
GearPowerThumbNames[GearPowerId.Special_Saver] = "48px-S3_Ability_Special_Saver.png"
GearPowerThumbNames[GearPowerId.Stealth_Jump] = "48px-S3_Ability_Stealth_Jump.png"
GearPowerThumbNames[GearPowerId.Sub_Power_Up] = "48px-S3_Ability_Sub_Power_Up.png"
GearPowerThumbNames[GearPowerId.Sub_Resistance_Up] = "48px-S3_Ability_Sub_Resistance_Up.png"
GearPowerThumbNames[GearPowerId.Swim_Speed_Up] = "48px-S3_Ability_Swim_Speed_Up.png"
GearPowerThumbNames[GearPowerId.Tenacity] = "48px-S3_Ability_Tenacity.png"
GearPowerThumbNames[GearPowerId.Thermal_Ink] = "48px-S3_Ability_Thermal_Ink.png"


function __getThumbPathImpl(fileName, dirName) {
    if (fileName == "") {
        return "";
    }

    return `${RootPath}Images/${dirName}/${fileName}`;
}
function getThumbPath(id, dict, dirName) {
    return __getThumbPathImpl(dict[id], dirName);
}
function getGearPowerThumbPath(id) {
    return getThumbPath(id, GearPowerThumbNames, "GearPowers");
}
function getMainWeaponThumbPath(id) {
    return getThumbPath(id, MainWeaponThumbNames, "MainWeapons");
}
function getSubWeaponThumbPath(id) {
    return getThumbPath(id, SubWeaponThumbNames, "SubWeapons");
}
function getSpecialThumbPath(id) {
    return getThumbPath(id, SpecialThumbNames, "Specials");
}

// ============================
// ???????????????
// ============================

class Weapon {
    constructor() {
        this.id = MainWeaponId.Splattershot_Jr;
        this.subWeaponId = MainWeaponToSubWeaponAndSpecials[this.id][0];
        this.specialId = MainWeaponToSubWeaponAndSpecials[this.id][1];
    }

    syncSubWeaponAndSpecial() {
        const subAndSp = MainWeaponToSubWeaponAndSpecials[this.id];
        this.subWeaponId = subAndSp[0];
        this.specialId = subAndSp[1];
    }
}

class Gear {
    constructor(id, mainGearPowerOptions, additionalStyle) {
        this.id = id;
        this.displayName = GearNames[id];
        this.mainPower = GearPowerId.Ink_Saver_Main;
        this.mainGearPowerOptions = mainGearPowerOptions;
        this.subPower1 = GearPowerId.None;
        this.subPower2 = GearPowerId.None;
        this.subPower3 = GearPowerId.None;
        this.additionalStyle = additionalStyle;
    }

    clearSubPowers() {
        this.subPower1 = GearPowerId.None;
        this.subPower2 = GearPowerId.None;
        this.subPower3 = GearPowerId.None;
    }
}

class SplatoonGearBuilderMain {
    constructor() {
        this.weapon = new Weapon();
        this.headGear = new Gear(GearType.Head, HeadMainGearPowerOptions, "background-color:rgb(125, 168, 255)");
        this.bodyGear = new Gear(GearType.Body, BodyMainGearPowerOptions, "background-color:rgb(120, 248, 225)");
        this.footGear = new Gear(GearType.Foot, FootMainGearPowerOptions, "background-color:rgb(206, 174, 255)");

        this.gears = [this.headGear, this.bodyGear, this.footGear];
        this.gearIdToGearDict = {};
        this.gearIdToGearDict[GearType.Head] = this.headGear;
        this.gearIdToGearDict[GearType.Body] = this.bodyGear;
        this.gearIdToGearDict[GearType.Foot] = this.footGear;
        this.currentGear = GearType.Head;
        this.showsGearPowerAmounts = false;
        this.gearPowerAmounts = {};
        this.updateGearPowerAmounts();
    }

    clearSubGearPowers() {
        let gear = this.gearIdToGearDict[this.currentGear];
        gear.clearSubPowers();
    }

    updateGearPowerAmounts() {
        this.gearPowerAmounts = this.calcGearPowerAmount();
        console.log(this.gearPowerAmounts);
    }

    calcGearPowerAmount() {
        const powers = {}
        for (let gear of this.gears) {
            this.__addGearPower(powers, gear.mainPower, 1);
            this.__addGearPower(powers, gear.subPower1, 0.3);
            this.__addGearPower(powers, gear.subPower2, 0.3);
            this.__addGearPower(powers, gear.subPower3, 0.3);
        }
        return powers;
    }
    /**
     * @param  {{GearPowerId, number}} powerDict
     * @param  {GearPowerId} power
     * @param  {number} amount
     */
    __addGearPower(powerDict, power, amount) {
        if (power == GearPowerId.None) {
            return;
        }

        if (!SubGearPowers.some(x => x == power)) {
            return;
        }

        if (!(power in powerDict)) {
            powerDict[power] = 0;
        }
        powerDict[power] += amount;
    }
}

g_appData = new SplatoonGearBuilderMain();

const g_app = new Vue({
    el: "#app",
    data: g_appData,
    methods: {
    }
});
