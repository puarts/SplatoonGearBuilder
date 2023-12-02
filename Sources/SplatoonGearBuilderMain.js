
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
GearPowerNames[GearPowerId.None] = "なし";
GearPowerNames[GearPowerId.Ability_Doubler] = "追加ギアパワー倍化"
GearPowerNames[GearPowerId.Comeback] = "カムバック"
GearPowerNames[GearPowerId.Drop_Roller] = "受け身術"
GearPowerNames[GearPowerId.Haunt] = "リベンジ"
GearPowerNames[GearPowerId.Ink_Recovery_Up] = "インク回復力アップ"
GearPowerNames[GearPowerId.Ink_Resistance_Up] = "相手インク影響軽減"
GearPowerNames[GearPowerId.Ink_Saver_Main] = "インク効率アップ(メイン)"
GearPowerNames[GearPowerId.Ink_Saver_Sub] = "インク効率アップ(サブ)"
GearPowerNames[GearPowerId.Intensify_Action] = "アクション強化"
GearPowerNames[GearPowerId.LastDitch_Effort] = "ラストスパート"
GearPowerNames[GearPowerId.Ninja_Squid] = "イカニンジャ"
GearPowerNames[GearPowerId.Object_Shredder] = "対物攻撃力アップ"
GearPowerNames[GearPowerId.Opening_Gambit] = "スタートダッシュ"
GearPowerNames[GearPowerId.Quick_Respawn] = "復活時間短縮"
GearPowerNames[GearPowerId.Quick_Super_Jump] = "スーパージャンプ時間短縮"
GearPowerNames[GearPowerId.Respawn_Punisher] = "復活ペナルティアップ"
GearPowerNames[GearPowerId.Run_Speed_Up] = "ヒト移動速度アップ"
GearPowerNames[GearPowerId.Special_Charge_Up] = "スペシャル増加量アップ"
GearPowerNames[GearPowerId.Special_Power_Up] = "スペシャル性能アップ"
GearPowerNames[GearPowerId.Special_Saver] = "スペシャル減少量ダウン"
GearPowerNames[GearPowerId.Stealth_Jump] = "ステルスジャンプ"
GearPowerNames[GearPowerId.Sub_Power_Up] = "サブ性能アップ"
GearPowerNames[GearPowerId.Sub_Resistance_Up] = "サブ影響軽減"
GearPowerNames[GearPowerId.Swim_Speed_Up] = "イカダッシュ速度アップ"
GearPowerNames[GearPowerId.Tenacity] = "逆境強化"
GearPowerNames[GearPowerId.Thermal_Ink] = "サーマルインク"



const GearNames = {}
GearNames[GearType.Head] = "アタマ";
GearNames[GearType.Body] = "フク";
GearNames[GearType.Foot] = "クツ";

// ============================
// 選択肢
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
// サムネール画像
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
// ツール本体
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
    constructor(id, mainGearPowerOptions, mainOnlyGearPowerIds, additionalStyle) {
        this.id = id;
        this.displayName = GearNames[id];
        this.mainPower = GearPowerId.None;
        this.mainGearPowerOptions = mainGearPowerOptions;
        this.subPower1 = GearPowerId.None;
        this.subPower2 = GearPowerId.None;
        this.subPower3 = GearPowerId.None;
        this.additionalStyle = additionalStyle;

        /** @type {Number[]} */
        this.mainGearPalette = mainOnlyGearPowerIds;

        this.mainGearDict = {};
        for (const id of mainOnlyGearPowerIds) {
            this.mainGearDict[id] = id;
        }
    }

    clearSubPowers() {
        this.subPower1 = GearPowerId.None;
        this.subPower2 = GearPowerId.None;
        this.subPower3 = GearPowerId.None;
    }
    clearAllPowers() {
        this.mainPower = GearPowerId.None;
        this.clearSubPowers();
    }

    setPowerToEmptyPlace(gearPowerId) {
        if (gearPowerId in this.mainGearDict) {
            this.mainPower = gearPowerId;
            return;
        }

        if (this.mainPower == GearPowerId.None) {
            this.mainPower = gearPowerId;
            return;
        }
        if (this.subPower1 == GearPowerId.None) {
            this.subPower1 = gearPowerId;
            return;
        }
        if (this.subPower2 == GearPowerId.None) {
            this.subPower2 = gearPowerId;
            return;
        }
        if (this.subPower3 == GearPowerId.None) {
            this.subPower3 = gearPowerId;
            return;
        }
    }
}

class GearPowerAmount {
    constructor(id, amount) {
        this.id = id;
        this.amount = amount;
    }
}

class SplatoonGearBuilderMain {
    constructor() {
        this.weapon = new Weapon();
        this.headGear = new Gear(GearType.Head, HeadMainGearPowerOptions, HeadOnlyGearPowers, "background-color:rgb(125, 168, 255)");
        this.bodyGear = new Gear(GearType.Body, BodyMainGearPowerOptions, BodyOnlyGearPowers, "background-color:rgb(120, 248, 225)");
        this.footGear = new Gear(GearType.Foot, FootMainGearPowerOptions, FootOnlyGearPowers, "background-color:rgb(206, 174, 255)");

        this.gears = [this.headGear, this.bodyGear, this.footGear];
        this.gearIdToGearDict = {};
        this.gearIdToGearDict[GearType.Head] = this.headGear;
        this.gearIdToGearDict[GearType.Body] = this.bodyGear;
        this.gearIdToGearDict[GearType.Foot] = this.footGear;
        this.currentGear = GearType.Head;
        this.showsGearPowerAmounts = false;
        this.gearPowerAmounts = [];
        this.updateGearPowerAmounts();

        /** @type {Number[]} */
        this.subGearPalette = SubGearPowers.slice(1);
    }

    setGearPowerForEmptyPower(gearPowerId) {
        const currentGear = this.gearIdToGearDict[this.currentGear];
        currentGear.setPowerToEmptyPlace(gearPowerId);
    }

    clearSubGearPowers() {
        const gear = this.gearIdToGearDict[this.currentGear];
        gear.clearSubPowers();
    }

    clearGearPowers() {
        const gear = this.gearIdToGearDict[this.currentGear];
        gear.clearAllPowers();
    }

    updateGearPowerAmounts() {
        const powers = this.calcGearPowerAmount();
        this.gearPowerAmounts = [];
        for (const power in powers) {
            this.gearPowerAmounts.push(new GearPowerAmount(power, powers[power]));
        }
    }

    calcGearPowerAmount() {
        const powers = {}
        for (let gear of this.gears) {
            this.__addGearPower(powers, gear.mainPower, 1);
            const subAmount = gear.mainPower == GearPowerId.Ability_Doubler ? 0.6 : 0.3;
            this.__addGearPower(powers, gear.subPower1, subAmount);
            this.__addGearPower(powers, gear.subPower2, subAmount);
            this.__addGearPower(powers, gear.subPower3, subAmount);
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
        gearPowerSelected: gearPowerId => {
            g_appData.setGearPowerForEmptyPower(gearPowerId);
        },
    }
});
