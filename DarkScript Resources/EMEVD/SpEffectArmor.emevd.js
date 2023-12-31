// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    N                               :                               \                               F                               R                               P                               G                               2                               _                               6                               4                               \                               T                               o                               o                               l                               \                               e                               x                               c                               e                               l                               \                               e                               m                               e                               v                               d                               \                               S                               p                               E                               f                               f                               e                               c                               t                               M                               u                               s                               t                               S                               u                               b                               .                               e                               m                               e                               v                               d                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

Event(21140100, Default, function() { // Traveling Merchant Hat
    SetStateInfoCategory(90, 0, 0);
    SetSpEffectLength(0);
});

Event(21210100, Default, function() { // Jester's Cap
    SetStateInfoCategory(90, 0, 0);
    SetSpEffectLength(0);
});

Event(21210101, Default, function() { // Jester's Robes
    SetStateInfo(StateInfoType.PreventCriticalHits, 0);
});

Event(21210102, Default, function() { // Jester's Gloves
    SetStateInfoCategory(100, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.1);
});

Event(21210103, Default, function() { // Jester's Tights
    SetStateInfoCategory(130, 0, 0);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 2);
});

Event(21230100, Default, function() { // Moon Hat
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 2);
});

Event(21360100, Default, function() { // Helm of Aurous
    ModifyStatMultiplicatively(MultiplicativeStatType.EquipLoad, 0, 1.01);
});

Event(21360101, Default, function() { // Armor of Aurous
    ModifyStatMultiplicatively(MultiplicativeStatType.EquipLoad, 0, 1.015);
});

Event(21360102, Default, function() { // Gauntlets of Aurous
    ModifyStatMultiplicatively(MultiplicativeStatType.EquipLoad, 0, 1.01);
});

Event(21360103, Default, function() { // Leggings of Aurous
    ModifyStatMultiplicatively(MultiplicativeStatType.EquipLoad, 0, 1.015);
});

Event(21430100, Default, function() { // Durgo's Hat
    SetStateInfoCategory(170, 0, 0);
    ModifyBowProperties(0, BowType.RegularBows, 0, 1.05, 1, 1.05, 1.05, 1);
    ModifyBowProperties(0, BowType.RegularBows, 1E-45, 1.05, 1, 1.05, 1.05, 1);
    ModifyBowProperties(0, BowType.RegularBows, 3E-45, 1.05, 1, 1.05, 1.05, 1);
});

Event(21440102, Default, function() { // Engraved Gauntlets
    SetStateInfo(StateInfoType.ChanceForCriticalAttack, 0);
});

Event(21460103, Default, function() { // Flying Feline Boots
    SetStateInfoCategory(130, 0, 0);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 3);
});

Event(21470100, Default, function() { // Moon Butterfly Hat
    SelfdamageCharacterAndNearbyEnemiesPeriodic(50000000, 3, -1);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
});

Event(21470101, Default, function() { // Moon Butterfly Wings
    ModifyJump(60, 1.75, 4, 5, 0.44, 0.44, 1);
    SelfdamageCharacterAndNearbyEnemiesPeriodic(50000000, 3, -1);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 2);
});

Event(21470102, Default, function() { // Moon Butterfly Cuffs
    SelfdamageCharacterAndNearbyEnemiesPeriodic(50000000, 3, -1);
});

Event(21470103, Default, function() { // Moon Butterfly Skirt
    ModifyJump(60, 1.75, 4, 5, 0.44, 0.44, 1);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 1);
    SelfdamageCharacterAndNearbyEnemiesPeriodic(50000000, 3, -1);
});

Event(21470110, Default, function() { // Moon Butterfly Skirt - Bullet
    CreateBullet(50000010, 50000010, 0, 1);
});

Event(21470120, Default, function() { // Moon Butterfly Skirt - Bullet
    SpawnSFX(5425, 249, 1, 0, 0, 0);
    SetSpEffectLength(3);
});

Event(21501100, Default, function() { // Black Witch Hat
    ModifyStatAdditively(AdditiveStatType.AttunementSlots, 0, 1);
});

Event(21502100, Default, function() { // Black Witch Domino Mask
    SetStateInfoCategory(160, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxHP, 0, 0.9);
    ModifyStatMultiplicatively(MultiplicativeStatType.SorceryPower, 0, 1.03);
    ModifyStatMultiplicatively(MultiplicativeStatType.MiraclePower, 0, 1.03);
    ModifyStatMultiplicatively(MultiplicativeStatType.PyromancyPower, 0, 1.03);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerStaff, 0, 1.03);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerChime, 0, 1.03);
});

Event(22060100, Default, function() { // White Priest Headpiece
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

Event(22062100, Default, function() { // Priestess Headpiece
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

Event(22180100, Default, function() { // Black Hollow Mage Hood
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
});

Event(22182100, Default, function() { // White Hollow Mage Hood
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
});

Event(22190101, Default, function() { // Lion Mage Robe
    SetStateInfoCategory(160, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SpellCastTime, 0, 0.95);
});

Event(22190102, Default, function() { // Lion Mage Cuffs
    SetStateInfoCategory(160, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SpellCastTime, 0, 0.95);
});

Event(22190103, Default, function() { // Lion Mage Skirt
    SetStateInfoCategory(160, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SpellCastTime, 0, 0.95);
});

Event(22230102, Default, function() { // Shadow Gauntlets
    ModifyDamageFlatToBaseAr(0, BuffType.Bleed, 50);
    IncreaseDamageMultiplicatively(0, BuffType.Bleed, 10);
});

Event(22310100, Default, function() { // Archdrake Helm
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
});

Event(22360100, Default, function() { // Dark Mask
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

Event(22370100, Default, function() { // Warlock Mask
    SetStateInfoCategory(100, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.025);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 2);
});

Event(22460100, Default, function() { // Tseldora Cap
    SetStateInfoCategory(100, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.025);
});

Event(22460101, Default, function() { // Tseldora Robe
    SetStateInfoCategory(100, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.05);
});

Event(22460102, Default, function() { // Tseldora Manchettes
    SetStateInfoCategory(100, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.1);
});

Event(22460103, Default, function() { // Tseldora Trousers
    SetStateInfoCategory(100, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.05);
});

Event(22510100, Default, function() { // Ironclad Helm
    SetStateInfo(StateInfoType.PreventStaggerFromHeadshots, 0);
});

Event(22510101, Default, function() { // Ironclad Armor
    SetStateInfo(StateInfoType.PreventCriticalHits, 0);
});

Event(22512100, Default, function() { // Old Ironclad Helm
    SetStateInfo(StateInfoType.PreventStaggerFromHeadshots, 0);
});

Event(22512101, Default, function() { // Ironclad Armor
    SetStateInfo(StateInfoType.PreventCriticalHits, 0);
});

Event(22270100, Default, function() { // Prisoner's Hood
    SetStateInfoCategory(90, 0, 0);
    SetSpEffectLength(0);
});

Event(22270101, Default, function() { // Prisoner's Tatters
    SetStateInfoCategory(90, 0, 0);
    SetSpEffectLength(0);
});

Event(22271100, Default, function() { // Prisoner's Hood
    SetStateInfoCategory(90, 0, 0);
    SetSpEffectLength(0);
});

Event(22271101, Default, function() { // Prisoner's Tatters
    SetStateInfoCategory(90, 0, 0);
    SetSpEffectLength(0);
});

Event(23080101, Default, function() { // Lion Warrior Cape
    SetStateInfoCategory(130, 0, 0);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 1);
});

Event(23080102, Default, function() { // Lion Warrior Cuffs
    SetStateInfoCategory(130, 0, 0);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 1);
});

Event(23080103, Default, function() { // Lion Warrior Skirt
    SetStateInfoCategory(130, 0, 0);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 2);
});

Event(23081100, Default, function() { // Lion Warrior Helm
    SetStateInfoCategory(130, 0, 0);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 1);
});

Event(23081101, Default, function() { // Red Lion Warrior Cape
    SetStateInfoCategory(130, 0, 0);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 2);
});

Event(23160100, Default, function() { // Desert Sorceress Hood
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 3);
});

Event(23171100, Default, function() { // Dragon Sage Hood
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

Event(23330100, Default, function() { // Velstadt's Helm
    ModifyStatAdditively(AdditiveStatType.Endurance, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Vitality, 0, 1);
});

Event(25090100, Default, function() { // Leydia Black Hood
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

Event(25100100, Default, function() { // Insolent Helm
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 2);
});

Event(25130100, Default, function() { // King's Crown
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 3);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 3);
    ApplySpEffectAndEndEventIfEventFlag(100730, 25130110, 0);
});

Event(25130110, Default, function() { // King's Crown - Vendrick's Blessing
    SetStateInfo(StateInfoType.PreventHollowing, 0);
    SetStateInfo(StateInfoType.ImmunitytoCurse, 0);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 3);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 3);
});

Event(26260100, Default, function() { // Penal Mask
    ModifyStatMultiplicatively(MultiplicativeStatType.EquipLoad, 0, 1.03);
});

Event(26260102, Default, function() { // Penal Handcuffs
    SetStateInfoCategory(160, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.PyromancyPower, 0, 1.075);
});

Event(27680100, Default, function() { // Black Hood
    SetStateInfoCategory(160, 0, 0);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 2);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 2);
    ModifyStatMultiplicatively(MultiplicativeStatType.SpellCastTime, 0, 0.9);
});

Event(27690100, Default, function() { // Saint's Hood
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxSpellUsages, 0, 1.05);
});

Event(27700100, Default, function() { // Hexer's Hood
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxSpellUsages, 0, 1.05);
});

Event(27710100, Default, function() { // Chaos Hood
    SetStateInfoCategory(160, 0, 0);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 3);
    ModifyStatMultiplicatively(MultiplicativeStatType.SpellCastTime, 0, 0.95);
});

Event(27830100, Default, function() { // Nahr Alma Hood
    SetStateInfoCategory(100, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.025);
});

Event(27830101, Default, function() { // Nahr Alma Robes
    SetStateInfoCategory(100, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.1);
});

Event(21610100, Default, function() { // Northwarder Hood
    SetStateInfoCategory(160, 0, 0);
    ModifySpellEffectLength(1.05);
});

Event(21610101, Default, function() { // Northwarder Robe
    SetStateInfoCategory(160, 0, 0);
    ModifySpellEffectLength(1.025);
});

Event(21610102, Default, function() { // Northwarder Manchettes
    SetStateInfoCategory(160, 0, 0);
    ModifySpellEffectLength(1.1);
});

Event(21610103, Default, function() { // Northwarder Trousers
    SetStateInfoCategory(160, 0, 0);
    ModifySpellEffectLength(1.025);
});

Event(21630100, Default, function() { // Crown of the Old Iron King
    SelfdamageCharacterAndNearbyEnemiesPeriodic(51000000, 120, -1);
    ApplySpEffectAndEndEventIfEventFlag(100730, 21630105, 0);
});

Event(21630105, Default, function() { // Crown of the Old Iron King - Vendrick's Blessing
    SetStateInfo(StateInfoType.PreventHollowing, 0);
    SetStateInfo(StateInfoType.ImmunitytoCurse, 0);
    SelfdamageCharacterAndNearbyEnemiesPeriodic(51000000, 120, -1);
});

Event(21630110, Default, function() {
    RestoreSpellUsage(20, 1);
    SpawnSFX(5466, 249, 1, 0, 0, 0);
    SetSpEffectLength(2);
});

Event(21640100, Default, function() { // Crown of the Ivory King
    SetStateInfoCategory(120, 0, 0);
    SpawnSFX(935, 249, 1, 40, 0, 0);
    HealSubEvent(1, 850, 1, 1.5, 0);
    ApplySpEffectAndEndEventIfEventFlag(100730, 21640110, 0);
});

Event(21640110, Default, function() { // Crown of the Ivory King - Vendrick's Blessing
    SetStateInfo(StateInfoType.PreventHollowing, 0);
    SetStateInfo(StateInfoType.ImmunitytoCurse, 0);
    SetStateInfoCategory(120, 0, 0);
    SpawnSFX(935, 249, 1, 40, 0, 0);
    HealSubEvent(1, 850, 1, 1.5, 0);
});

Event(21650100, Default, function() { // Crown of the Sunken King
    ModifyAttributeBasedOnCurrentValue(AttributeType.Vitality, 0, 99, -1, -1);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Vigor, 0, 99, -1, -1);
    ModifyStatAdditively(AdditiveStatType.Endurance, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Strength, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Dexterity, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
    ApplySpEffectAndEndEventIfEventFlag(100730, 21650110, 0);
});

Event(21650110, Default, function() { // Crown of the Sunken King - Vendrick's Blessing
    SetStateInfo(StateInfoType.PreventHollowing, 0);
    SetStateInfo(StateInfoType.ImmunitytoCurse, 0);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Vitality, 0, 99, -1, -1);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Vigor, 0, 99, -1, -1);
    ModifyStatAdditively(AdditiveStatType.Endurance, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Strength, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Dexterity, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

Event(21660100, Default, function() { // Old Bell Helm
    SetStateInfoCategory(160, 0, 0);
    SetStateInfo(StateInfoType.PreventDamageFromHeadshots, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.MiraclePower, 0, 1.015);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerChime, 0, 1.015);
});

Event(21670100, Default, function() { // Hollow Skin
    SetStateInfoCategory(30, 0, 0);
    SetSpEffectLength(0);
});

Event(21680100, Default, function() { // Pharros Mask
    ModifyProperty(PlayerPropertyType.Wetness, 0, 10);
});

Event(21690103, Default, function() { // Flower Skirt
    ModifyStatAdditively(AdditiveStatType.Vigor, 0, 2);
    ModifyStatAdditively(AdditiveStatType.Endurance, 0, 1);
});

Event(21710100, Default, function() { // Symbol of Avarice
    SetStateInfoCategory(100, 0, 0);
    SetStateInfoCategory(90, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SoulGainRate, 0, 1.025);
    SelfdamageCharacterAndNearbyEnemiesPeriodic(51040000, 2, -1);
});

Event(26650103, Default, function() { // Sanctum Knight Leggings
    SetStateInfoCategory(130, 0, 0);
    SpawnSFX(5446, 5, 1, 0, 0, 0);
    SpawnSFX(5446, 6, 1, 0, 0, 0);
    SetStateInfo(StateInfoType.SilenceFootstepSound, 0);
    ModifyStatAdditively(AdditiveStatType.FallDamageProtectionModifier, 0, 2);
});

Event(26660102, Default, function() { // Sanctum Soldier Gauntlet
    ModifyDamageFlatToBaseAr(0, BuffType.Poison, 50);
});

Event(26700100, Default, function() { // Sanctum Priestess Tiara
    SelfdamageCharacterAndNearbyEnemiesPeriodic(51020000, 7, -1);
});

Event(26700110, Default, function() { // Sanctum Priestess Tiara - Bullet
    StatusSubEvent(1, 870, 5, 1089470464);
});

Event(26880100, Default, function() { // Loyce Helm
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26880200, 26880210);
});

Event(26880101, Default, function() { // Loyce Armor
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26880201, 26880211);
});

Event(26880102, Default, function() { // Loyce Gauntlets
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26880202, 26880212);
});

Event(26880103, Default, function() { // Loyce Leggings
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26880203, 26880213);
});

Event(26880210, Default, function() { // Loyce Helm - Female
    SetStateInfoCategory(110, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

Event(26880211, Default, function() { // Loyce Armor - Female
    SetStateInfoCategory(110, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 20);
});

Event(26880212, Default, function() { // Loyce Gauntlets - Female
    SetStateInfoCategory(110, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

Event(26880213, Default, function() { // Loyce Leggings - Female
    SetStateInfoCategory(110, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

Event(26890100, Default, function() { // Charred Loyce Helm
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26890200, 26890210);
});

Event(26890101, Default, function() { // Charred Loyce Armor
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26890201, 26890211);
});

Event(26890102, Default, function() { // Charred Loyce Gauntlets
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26890202, 26890212);
});

Event(26890103, Default, function() { // Charred Loyce Leggings
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26890203, 26890213);
});

Event(26890210, Default, function() { // Charred Loyce Helm - Female
    SetStateInfoCategory(110, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

Event(26890211, Default, function() { // Charred Loyce Armor - Female
    SetStateInfoCategory(110, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 20);
});

Event(26890212, Default, function() { // Charred Loyce Gauntlets - Female
    SetStateInfoCategory(110, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

Event(26890213, Default, function() { // Charred Loyce Leggings - Female
    SetStateInfoCategory(110, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

Event(26900100, Default, function() { // Ivory King Helm
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26900200, 26900210);
});

Event(26900101, Default, function() { // Ivory King Armor
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26900201, 26900211);
});

Event(26900102, Default, function() { // Ivory King Gauntlets
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26900202, 26900212);
});

Event(26900103, Default, function() { // Ivory King Leggings
    ApplySpEffectOnEnemyKillBasedOnEnemyGender(26900203, 26900213);
});

Event(26900210, Default, function() { // Ivory King Helm - Female
    SetStateInfoCategory(110, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

Event(26900211, Default, function() { // Ivory King Armor - Female
    SetStateInfoCategory(110, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 20);
});

Event(26900212, Default, function() { // Ivory King Gauntlets - Female
    SetStateInfoCategory(110, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

Event(26900213, Default, function() { // Ivory King Leggings - Female
    SetStateInfoCategory(110, 0, 0);
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 5);
});

Event(22480100, Default, function() { // Peasant Hat
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 2);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Intelligence, 0, 99, -1, -1);
});

Event(22480101, Default, function() { // Peasant Attire
    ModifyStatAdditively(AdditiveStatType.Adaptability, 0, 2);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Intelligence, 0, 99, -1, -1);
});

Event(22480102, Default, function() { // Peasant Long Gloves
    ModifyStatAdditively(AdditiveStatType.Adaptability, 0, 2);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Intelligence, 0, 99, -1, -1);
});

Event(22480103, Default, function() { // Peasant Trousers
    ModifyStatAdditively(AdditiveStatType.Adaptability, 0, 2);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Intelligence, 0, 99, -1, -1);
});

Event(23070100, Default, function() { // Vengarl's Helm
    ModifyStatAdditively(AdditiveStatType.Vitality, 0, 2);
});

Event(25040100, Default, function() { // Looking Glass Mask
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

Event(25060102, Default, function() { // Agdayne's Cuffs
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

Event(27510100, Default, function() { // Cale's Helm
    ModifyStatAdditively(AdditiveStatType.Dexterity, 0, 2);
    ModifyStatAdditively(AdditiveStatType.Endurance, 0, 1);
});

Event(27550100, Default, function() { // Mad Warrior Mask
    ModifyStatAdditively(AdditiveStatType.Adaptability, 0, 2);
});
