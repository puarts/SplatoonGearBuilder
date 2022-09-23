
const RootPath = "../";

// ============================
// 識別子
// ============================
let _tmpWeaponId = 0;
const MainWeaponId = {
    // シューター
    SplattershotJr: _tmpWeaponId,
    HeroShotReplica: ++_tmpWeaponId,
    Splattershot: ++_tmpWeaponId,
    AerosprayMG: ++_tmpWeaponId,
    NZAP85: ++_tmpWeaponId,
    SplattershotPro: ++_tmpWeaponId,
    SplooshOMatic: ++_tmpWeaponId,
    dot52Gal: ++_tmpWeaponId,
    L3Nozzlenose: ++_tmpWeaponId,
    JetSquelcher: ++_tmpWeaponId,
    SplashOMatic: ++_tmpWeaponId,
    dot96Gal: ++_tmpWeaponId,
    Squeezer: ++_tmpWeaponId,
    H3Nozzlenose: ++_tmpWeaponId,

    // ブラスター
    Blaster: ++_tmpWeaponId,
    RapidBlaster: ++_tmpWeaponId,
    RangeBlaster: ++_tmpWeaponId,
    LunaBlaster: ++_tmpWeaponId,
    ClashBlaster: ++_tmpWeaponId,
    RapidBlasterPro: ++_tmpWeaponId,

    // シャージャー
    SplatCharger: ++_tmpWeaponId,
    ClassicSquiffer: ++_tmpWeaponId,
    Splatterscope: ++_tmpWeaponId,
    Eliter4K: ++_tmpWeaponId,
    Bamboozler14MK1: ++_tmpWeaponId,
    GooTuber: ++_tmpWeaponId,
    Eliter4KScope: ++_tmpWeaponId,

    // ローラー
    SplatRoller: ++_tmpWeaponId,
    CarbonRoller: ++_tmpWeaponId,
    DynamoRoller: ++_tmpWeaponId,
    FlingzaRoller: ++_tmpWeaponId,

    // ブラシ
    Octobrush: ++_tmpWeaponId,
    Inkbrush: ++_tmpWeaponId,

    // スロッシャー
    Slosher: ++_tmpWeaponId,
    TriSlosher: ++_tmpWeaponId,
    SloshingMachine: ++_tmpWeaponId,
    Bloblobber: ++_tmpWeaponId,
    Explosher: ++_tmpWeaponId,

    // スピナー
    HeavySplatling: ++_tmpWeaponId,
    MiniSplatling: ++_tmpWeaponId,
    HydraSplatling: ++_tmpWeaponId,
    Nautilus47: ++_tmpWeaponId,
    BallpointSplatling: ++_tmpWeaponId,

    // マニューバ
    SplatDualies: ++_tmpWeaponId,
    DualieSquelchers: ++_tmpWeaponId,
    DappleDualies: ++_tmpWeaponId,
    DarkTetraDualies: ++_tmpWeaponId,
    GloogaDualies: ++_tmpWeaponId,

    // ストリンガー
    TriStringer: ++_tmpWeaponId,
    REEFLUX450: ++_tmpWeaponId,

    // ワイパー
    SplatanaWiper: ++_tmpWeaponId,
    SplatanaStamper: ++_tmpWeaponId,

    // 傘
    SplatBrella: ++_tmpWeaponId,
    TentaBrella: ++_tmpWeaponId,
    UndercoverBrella: ++_tmpWeaponId,
};

const SubWeaponId = {
    SplatBomb: 0,
    AngleShooter: 1,
    ToxicMist: 2,
    Torpedo: 3,
    SuctionBomb: 4,
    SquidBeakon: 5,
    Sprinkler: 6,
    SplatBomb: 7,
    SplashWall: 8,
    PointSensor: 9,
    InkMine: 10,
    FizzyBomb: 11,
    CurlingBomb: 12,
    BurstBomb: 13,
    Autobomb: 14,
};

let _tmpSpecialId = 0;
const SpecialId = {
    Big_Bubbler: _tmpSpecialId++,
    Crab_Tank: _tmpSpecialId++,
    Ink_Vac: _tmpSpecialId++,
    Killer_Wail_5_1: _tmpSpecialId++,
    Reefslider: _tmpSpecialId++,
    Tacticooler: _tmpSpecialId++,
    Triple_Inkstrike: _tmpSpecialId++,
    Trizooka: _tmpSpecialId++,
    Wave_Breaker: _tmpSpecialId++,
    Zipcaster: _tmpSpecialId++,
};

const GearPowerId = {
    None: 0,
    InkSaverMain: 1,
    InkSaverSub: 2,
    InkRecoveryUp: 3,
    RunSpeedUp: 4,
    SwimSpeedUp: 5,
    SpecialChargeUp: 6,
};

const GearType = {
    Head: 0,
    Body: 1,
    Foot: 2,
}

// ============================
// 表示名
// ============================

const MainWeaponNames = {}
MainWeaponNames[MainWeaponId.SplattershotJr] = "わかばシューター";
MainWeaponNames[MainWeaponId.HeroShotReplica] = "ヒーローシューター";
MainWeaponNames[MainWeaponId.Splattershot] = "スプラシューター";
MainWeaponNames[MainWeaponId.AerosprayMG] = "プロモデラーMG";
MainWeaponNames[MainWeaponId.NZAP85] = "N-ZAP 85";
MainWeaponNames[MainWeaponId.SplattershotPro] = "プライムシューター";
MainWeaponNames[MainWeaponId.SplooshOMatic] = "ボールドマーカー";
MainWeaponNames[MainWeaponId.dot52Gal] = ".52ガロン";
MainWeaponNames[MainWeaponId.L3Nozzlenose] = "L3リールガン";
MainWeaponNames[MainWeaponId.JetSquelcher] = "ジェットスイーパー";
MainWeaponNames[MainWeaponId.SplashOMatic] = "シャープマーカー";
MainWeaponNames[MainWeaponId.dot96Gal] = ".96ガロン";
MainWeaponNames[MainWeaponId.Squeezer] = "ボールドマーカー";
MainWeaponNames[MainWeaponId.H3Nozzlenose] = "H3リールガン";

const GearPowerNames = {}
GearPowerNames[GearPowerId.None] = "なし";
GearPowerNames[GearPowerId.InkSaverMain] = "メインインク効率アップ";
GearPowerNames[GearPowerId.InkSaverSub] = "サブインク効率アップ";
GearPowerNames[GearPowerId.InkRecoveryUp] = "インク回復アップ";
GearPowerNames[GearPowerId.RunSpeedUp] = "歩く速度アップ";
GearPowerNames[GearPowerId.SwimSpeedUp] = "イカ速度アップ";
GearPowerNames[GearPowerId.SpecialChargeUp] = "スペシャル増加量アップ";

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
const GearPowerOptions = __createSelect2Options(GearPowerNames);


// ============================
// サムネール画像
// ============================
const GearPowerThumbNames = {}
GearPowerThumbNames[GearPowerId.InkSaverMain] = "48px-S3_Ability_Ink_Saver_(Main).png";
GearPowerThumbNames[GearPowerId.InkSaverSub] = "48px-S3_Ability_Ink_Saver_(Sub).png";
GearPowerThumbNames[GearPowerId.InkRecoveryUp] = "48px-S3_Ability_Ink_Recovery_Up.png";
GearPowerThumbNames[GearPowerId.RunSpeedUp] = "48px-S3_Ability_Run_Speed_Up.png";
GearPowerThumbNames[GearPowerId.SwimSpeedUp] = "48px-S3_Ability_Swim_Speed_Up.png";
GearPowerThumbNames[GearPowerId.SpecialChargeUp] = "48px-S3_Ability_Special_Charge_Up.png";


const MainWeaponThumbNames = {}
MainWeaponThumbNames[MainWeaponId.SplattershotJr] = "128px-S3_Weapon_Main_Splattershot_Jr.png";
MainWeaponThumbNames[MainWeaponId.HeroShotReplica] = "S3_Weapon_Main_Hero_Shot_Replica.png";
MainWeaponThumbNames[MainWeaponId.dot52Gal] = "128px-S3_Weapon_Main_.52_Gal.png"
MainWeaponThumbNames[MainWeaponId.dot96Gal] = "128px-S3_Weapon_Main_.96_Gal.png"
MainWeaponThumbNames[MainWeaponId.AerosprayMG] = "128px-S3_Weapon_Main_Aerospray_MG.png"
MainWeaponThumbNames[MainWeaponId.SplattershotPro] = "128px-S3_Weapon_Main_Splattershot_Pro.png"
MainWeaponThumbNames[MainWeaponId.Splattershot] = "128px-S3_Weapon_Main_Splattershot.png"
MainWeaponThumbNames[MainWeaponId.SplooshOMatic] = "128px-S3_Weapon_Main_Sploosh-o-matic.png"
MainWeaponThumbNames[MainWeaponId.BallpointSplatling] = "128px-S3_Weapon_Main_Ballpoint_Splatling.png"
MainWeaponThumbNames[MainWeaponId.Bamboozler14MK1] = "128px-S3_Weapon_Main_Bamboozler_14_Mk_I.png"
MainWeaponThumbNames[MainWeaponId.Blaster] = "128px-S3_Weapon_Main_Blaster.png"
MainWeaponThumbNames[MainWeaponId.Bloblobber] = "128px-S3_Weapon_Main_Bloblobber.png"
MainWeaponThumbNames[MainWeaponId.CarbonRoller] = "128px-S3_Weapon_Main_Carbon_Roller.png"
MainWeaponThumbNames[MainWeaponId.ClashBlaster] = "128px-S3_Weapon_Main_Clash_Blaster.png"
MainWeaponThumbNames[MainWeaponId.ClassicSquiffer] = "128px-S3_Weapon_Main_Classic_Squiffer.png"
MainWeaponThumbNames[MainWeaponId.DappleDualies] = "128px-S3_Weapon_Main_Dapple_Dualies.png"
MainWeaponThumbNames[MainWeaponId.DarkTetraDualies] = "128px-S3_Weapon_Main_Dark_Tetra_Dualies.png"
MainWeaponThumbNames[MainWeaponId.DualieSquelchers] = "128px-S3_Weapon_Main_Dualie_Squelchers.png"
MainWeaponThumbNames[MainWeaponId.DynamoRoller] = "128px-S3_Weapon_Main_Dynamo_Roller.png"
MainWeaponThumbNames[MainWeaponId.Eliter4KScope] = "128px-S3_Weapon_Main_E-liter_4K_Scope.png"
MainWeaponThumbNames[MainWeaponId.Eliter4K] = "128px-S3_Weapon_Main_E-liter_4K.png"
MainWeaponThumbNames[MainWeaponId.Explosher] = "128px-S3_Weapon_Main_Explosher.png"
MainWeaponThumbNames[MainWeaponId.FlingzaRoller] = "128px-S3_Weapon_Main_Flingza_Roller.png"
MainWeaponThumbNames[MainWeaponId.GloogaDualies] = "128px-S3_Weapon_Main_Glooga_Dualies.png"
MainWeaponThumbNames[MainWeaponId.GooTuber] = "128px-S3_Weapon_Main_Goo_Tuber.png"
MainWeaponThumbNames[MainWeaponId.H3Nozzlenose] = "128px-S3_Weapon_Main_H-3_Nozzlenose.png"
MainWeaponThumbNames[MainWeaponId.HeavySplatling] = "128px-S3_Weapon_Main_Heavy_Splatling.png"
MainWeaponThumbNames[MainWeaponId.HydraSplatling] = "128px-S3_Weapon_Main_Hydra_Splatling.png"
MainWeaponThumbNames[MainWeaponId.Inkbrush] = "128px-S3_Weapon_Main_Inkbrush.png"
MainWeaponThumbNames[MainWeaponId.JetSquelcher] = "128px-S3_Weapon_Main_Jet_Squelcher.png"
MainWeaponThumbNames[MainWeaponId.L3Nozzlenose] = "128px-S3_Weapon_Main_L-3_Nozzlenose.png"
MainWeaponThumbNames[MainWeaponId.LunaBlaster] = "128px-S3_Weapon_Main_Luna_Blaster.png"
MainWeaponThumbNames[MainWeaponId.MiniSplatling] = "128px-S3_Weapon_Main_Mini_Splatling.png"
MainWeaponThumbNames[MainWeaponId.NZAP85] = "128px-S3_Weapon_Main_N-ZAP_'85.png"
MainWeaponThumbNames[MainWeaponId.Nautilus47] = "128px-S3_Weapon_Main_Nautilus_47.png"
MainWeaponThumbNames[MainWeaponId.Octobrush] = "128px-S3_Weapon_Main_Octobrush.png"
MainWeaponThumbNames[MainWeaponId.RangeBlaster] = "128px-S3_Weapon_Main_Range_Blaster.png"
MainWeaponThumbNames[MainWeaponId.RapidBlasterPro] = "128px-S3_Weapon_Main_Rapid_Blaster_Pro.png"
MainWeaponThumbNames[MainWeaponId.RapidBlaster] = "128px-S3_Weapon_Main_Rapid_Blaster.png"
MainWeaponThumbNames[MainWeaponId.REEFLUX450] = "128px-S3_Weapon_Main_REEF-LUX_450.png"
MainWeaponThumbNames[MainWeaponId.Slosher] = "128px-S3_Weapon_Main_Slosher.png"
MainWeaponThumbNames[MainWeaponId.SloshingMachine] = "128px-S3_Weapon_Main_Sloshing_Machine.png"
MainWeaponThumbNames[MainWeaponId.SplashOMatic] = "128px-S3_Weapon_Main_Splash-o-matic.png"
MainWeaponThumbNames[MainWeaponId.SplatBrella] = "128px-S3_Weapon_Main_Splat_Brella.png"
MainWeaponThumbNames[MainWeaponId.SplatCharger] = "128px-S3_Weapon_Main_Splat_Charger.png"
MainWeaponThumbNames[MainWeaponId.SplatDualies] = "128px-S3_Weapon_Main_Splat_Dualies.png"
MainWeaponThumbNames[MainWeaponId.SplatRoller] = "128px-S3_Weapon_Main_Splat_Roller.png"
MainWeaponThumbNames[MainWeaponId.SplatanaStamper] = "128px-S3_Weapon_Main_Splatana_Stamper.png"
MainWeaponThumbNames[MainWeaponId.SplatanaWiper] = "128px-S3_Weapon_Main_Splatana_Wiper.png"
MainWeaponThumbNames[MainWeaponId.Splatterscope] = "128px-S3_Weapon_Main_Splatterscope.png"
MainWeaponThumbNames[MainWeaponId.Squeezer] = "128px-S3_Weapon_Main_Squeezer.png"
MainWeaponThumbNames[MainWeaponId.TentaBrella] = "128px-S3_Weapon_Main_Tenta_Brella.png"
MainWeaponThumbNames[MainWeaponId.TriSlosher] = "128px-S3_Weapon_Main_Tri-Slosher.png"
MainWeaponThumbNames[MainWeaponId.TriStringer] = "128px-S3_Weapon_Main_Tri-Stringer.png"
MainWeaponThumbNames[MainWeaponId.UndercoverBrella] = "128px-S3_Weapon_Main_Undercover_Brella.png"




const SubWeaponThumbNames = {}
SubWeaponThumbNames[SubWeaponId.SplatBomb] = "SplatBomb.png"
SubWeaponThumbNames[SubWeaponId.SplatBomb] = "SplatBomb.png"
SubWeaponThumbNames[SubWeaponId.AngleShooter] = "AngleShooter.png"
SubWeaponThumbNames[SubWeaponId.ToxicMist] = "ToxicMist.png"
SubWeaponThumbNames[SubWeaponId.Torpedo] = "Torpedo.png"
SubWeaponThumbNames[SubWeaponId.SuctionBomb] = "SuctionBomb.png"
SubWeaponThumbNames[SubWeaponId.SquidBeakon] = "SquidBeakon.png"
SubWeaponThumbNames[SubWeaponId.Sprinkler] = "Sprinkler.png"
SubWeaponThumbNames[SubWeaponId.SplatBomb] = "SplatBomb.png"
SubWeaponThumbNames[SubWeaponId.SplashWall] = "SplashWall.png"
SubWeaponThumbNames[SubWeaponId.PointSensor] = "PointSensor.png"
SubWeaponThumbNames[SubWeaponId.InkMine] = "InkMine.png"
SubWeaponThumbNames[SubWeaponId.FizzyBomb] = "FizzyBomb.png"
SubWeaponThumbNames[SubWeaponId.CurlingBomb] = "CurlingBomb.png"
SubWeaponThumbNames[SubWeaponId.BurstBomb] = "BurstBomb.png"
SubWeaponThumbNames[SubWeaponId.Autobomb] = "Autobomb.png"
const SpecialThumbNames = {}
SpecialThumbNames[SpecialId.Big_Bubbler] = "64px-S3_Weapon_Special_Big_Bubbler.png"
SpecialThumbNames[SpecialId.Crab_Tank] = "64px-S3_Weapon_Special_Crab_Tank.png"
SpecialThumbNames[SpecialId.Ink_Vac] = "64px-S3_Weapon_Special_Ink_Vac.png"
SpecialThumbNames[SpecialId.Killer_Wail_5_1] = "64px-S3_Weapon_Special_Killer_Wail_5.1.png"
SpecialThumbNames[SpecialId.Reefslider] = "64px-S3_Weapon_Special_Reefslider.png"
SpecialThumbNames[SpecialId.Tacticooler] = "64px-S3_Weapon_Special_Tacticooler.png"
SpecialThumbNames[SpecialId.Triple_Inkstrike] = "64px-S3_Weapon_Special_Triple_Inkstrike.png"
SpecialThumbNames[SpecialId.Trizooka] = "64px-S3_Weapon_Special_Trizooka.png"
SpecialThumbNames[SpecialId.Wave_Breaker] = "64px-S3_Weapon_Special_Wave_Breaker.png"
SpecialThumbNames[SpecialId.Zipcaster] = "64px-S3_Weapon_Special_Zipcaster.png"



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
// サブとスペシャル
// ============================

const MainWeaponToSubWeaponAndSpecials = {}
MainWeaponToSubWeaponAndSpecials[MainWeaponId.SplattershotJr] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]

MainWeaponToSubWeaponAndSpecials[MainWeaponId.HeroShotReplica] = [SubWeaponId.SuctionBomb, SpecialId.Trizooka]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.dot52Gal] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.dot96Gal] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.AerosprayMG] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.SplattershotPro] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.Splattershot] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.SplooshOMatic] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.BallpointSplatling] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.Bamboozler14MK1] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.Blaster] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.Bloblobber] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.CarbonRoller] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.ClashBlaster] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.ClassicSquiffer] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.DappleDualies] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.DarkTetraDualies] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.DualieSquelchers] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.DynamoRoller] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.Eliter4KScope] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.Eliter4K] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.Explosher] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.FlingzaRoller] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.GloogaDualies] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.GooTuber] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.H3Nozzlenose] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.HeavySplatling] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.HydraSplatling] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.Inkbrush] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.JetSquelcher] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.L3Nozzlenose] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.LunaBlaster] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.MiniSplatling] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.NZAP85] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.Nautilus47] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.Octobrush] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.RangeBlaster] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.RapidBlasterPro] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.RapidBlaster] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.REEFLUX450] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.Slosher] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.SloshingMachine] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.SplashOMatic] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.SplatBrella] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.SplatCharger] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.SplatDualies] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.SplatRoller] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.SplatanaStamper] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.SplatanaWiper] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.Splatterscope] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.Squeezer] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.TentaBrella] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.TriSlosher] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.TriStringer] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]
MainWeaponToSubWeaponAndSpecials[MainWeaponId.UndercoverBrella] = [SubWeaponId.SplatBomb, SpecialId.Big_Bubbler]

// ============================
// ツール本体
// ============================

class Weapon {
    constructor() {
        this.id = MainWeaponId.SplattershotJr;
        this.subWeaponId = SubWeaponId.SplatBomb;
        this.specialId = SpecialId.Big_Bubbler;
    }

    syncSubWeaponAndSpecial() {
        const subAndSp = MainWeaponToSubWeaponAndSpecials[this.id];
        this.subWeaponId = subAndSp[0];
        this.specialId = subAndSp[1];
    }
}

class Gear {
    constructor(id, additionalStyle) {
        this.id = id;
        this.displayName = GearNames[id];
        this.mainPower = GearPowerId.InkSaverMain;
        this.subPower1 = GearPowerId.None;
        this.subPower2 = GearPowerId.None;
        this.subPower3 = GearPowerId.None;
        this.additionalStyle = additionalStyle;
    }
}

class SplatoonGearBuilderMain {
    constructor() {
        this.weapon = new Weapon();
        this.headGear = new Gear(GearType.Head, "background-color:rgb(125, 168, 255)");
        this.bodyGear = new Gear(GearType.Body, "background-color:rgb(120, 248, 225)");
        this.footGear = new Gear(GearType.Foot, "background-color:rgb(206, 174, 255)");

        this.gears = [this.headGear, this.bodyGear, this.footGear];
        this.currentGear = GearType.Head;
    }
}

g_appData = new SplatoonGearBuilderMain();

const g_app = new Vue({
    el: "#app",
    data: g_appData,
    methods: {
    }
});
