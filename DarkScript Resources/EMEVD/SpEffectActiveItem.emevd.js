// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    N                                                               :                                                               \                                                               F                                                               R                                                               P                                                               G                                                               2                                                               _                                                               6                                                               4                                                               \                                                               T                                                               o                                                               o                                                               l                                                               \                                                               e                                                               x                                                               c                                                               e                                                               l                                                               \                                                               e                                                               m                                                               e                                                               v                                                               d                                                               \                                                               S                                                               p                                                               E                                                               f                                                               f                                                               e                                                               c                                                               t                                                               M                                                               u                                                               s                                                               t                                                               S                                                               u                                                               b                                                               .                                                               e                                                               m                                                               e                                                               v                                                               d                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

Event(60010000, Default, function() { // Lifegem
    HPRestorationEffect(1, 2.8);
    HealSubEvent(1, 850, 500, 11.1, 1);
});

Event(60020000, Default, function() { // Radiant Lifegem
    HPRestorationEffect(1, 2.8);
    HealSubEvent(1, 850, 850, 18.8, 1);
});

Event(60030000, Default, function() { // Old Radiant Lifegem
    HPRestorationEffect(1, 2.8);
    HealSubEvent(1, 850, 1300, 28.8, 1);
});

Event(60035000, Default, function() { // Elizabeth Mushroom
    SpawnSFX(893, 249, 1, 6, 0, 0);
    HPRestorationEffect(1, 2);
    HealSubEvent(1, 850, 2000, 44.4, 0);
});

Event(60040000, Default, function() { // Amber Herb
    RestoreSpellUsage(35, 1);
});

Event(60050000, Default, function() { // Twilight Herb
    RestoreSpellUsage(50, 1);
});

Event(60060000, Default, function() { // Wilted Dusk Herb
    RestoreSpellUsage(70, 1);
});

Event(60070000, Default, function() { // Poison Moss
    StatusSubEvent(1, 871, 0);
    StatusSubEvent(1, 871, 8);
    SpawnSFX(862, 249, 1, 0, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.ToxicBuildup, 3, 100);
});

Event(60090000, Default, function() { // Monastery Charm
    SpawnSFX(873, 9, 1, 0, 0, 0);
    HealSubEvent(1, 850, 850, 4.2, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.ToxicBuildup, 3, 100);
    StatusSubEvent(1, 871, 0);
    StatusSubEvent(1, 871, 8);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.ToxicBuildup, 3, 100);
});

Event(60100000, Default, function() { // Dragon Charm
    SpawnSFX(874, 9, 1, 0, 0, 0);
    HealSubEvent(1, 850, 1500, 7.5, 1);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.ToxicBuildup, 3, 100);
    StatusSubEvent(1, 871, 0);
    StatusSubEvent(1, 871, 8);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.ToxicBuildup, 3, 100);
});

Event(60105000, Default, function() { // Divine Blessing
    HealSubEvent(1, 851, 1120403456, 10, 1); // 1120403456 = 100%
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.ToxicBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.BleedBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.PetrifyBuildup, 3, 100);
    ModifyStatMultiplicatively(MultiplicativeStatType.CurseBuildup, 3, 100);
    StatusSubEvent(1, 871, 0);
    StatusSubEvent(1, 871, 8);
    StatusSubEvent(1, 871, 1);
    StatusSubEvent(1, 871, 2);
    StatusSubEvent(1, 871, 4);
    StatusSubEvent(1, 871, 10);
    StatusSubEvent(1, 871, 3);
    StatusSubEvent(1, 871, 6);
    StatusSubEvent(1, 871, 7);
    StatusSubEvent(1, 871, 9);
    StatusSubEvent(1, 871, 11);
    StatusSubEvent(1, 871, 5);
});

Event(60110000, Default, function() { // Rouge Water
    HealSubEvent(1, 850, 850, 18.8, 1);
    RestoreSpellUsage(50, 1);
});

Event(60120000, Default, function() { // Crimson Water
    HealSubEvent(1, 850, 1500, 33.3, 1);
    RestoreSpellUsage(70, 1);
});

Event(60151000, Default, function() { // Human Effigy
    RestoreHumanity(true);
});

Event(60155000, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 550, 1.8, 1);
});

Event(60155001, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 600, 2, 1);
});

Event(60155002, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 650, 2.1, 1);
});

Event(60155003, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 700, 2.3, 1);
});

Event(60155004, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 750, 2.5, 1);
});

Event(60155005, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 800, 2.6, 1);
});

Event(60155006, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 800, 2.6, 1);
});

Event(60155100, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 600, 2, 1);
});

Event(60155101, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 650, 2.1, 1);
});

Event(60155102, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 700, 2.3, 1);
});

Event(60155103, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 750, 2.5, 1);
});

Event(60155104, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 800, 2.6, 1);
});

Event(60155105, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 850, 2.8, 1);
});

Event(60155106, Default, function() {
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 850, 2.8, 1);
});

Event(60155010, Default, function() { // Estus Flask
    HPRestorationEffect(1, 2.5);
    HealSubEvent(1, 850, 700, 1.1, 1);
});

Event(60155020, Default, function() { // Estus Flask
    HealSubEvent(1, 851, 1097859072, 10, 1);
});

Event(60155030, Default, function() { // Estus Flask
    HealSubEvent(1, 851, 1106247680, 10, 1);
});

Event(60160000, Default, function() { // Small Blue Burr
    SpawnSFX(847, 249, 1, 7, 0, 0);
    BuffDefense(90, BuffType.Magic, 15);
});

Event(60170000, Default, function() { // Small Yellow Burr
    SpawnSFX(848, 249, 1, 7, 0, 0);
    BuffDefense(90, BuffType.Lightning, 15);
});

Event(60180000, Default, function() { // Small Orange Burr
    SpawnSFX(849, 249, 1, 7, 0, 0);
    BuffDefense(90, BuffType.Fire, 15);
    ModifyStatMultiplicatively(MultiplicativeStatType.IgniteBuildup, 90, 1.2);
});

Event(60190000, Default, function() { // Dark Troches
    SpawnSFX(850, 249, 1, 7, 0, 0);
    BuffDefense(90, BuffType.Dark, 15);
});

Event(60200000, Default, function() { // Common Fruit
    SpawnSFX(851, 249, 1, 7, 0, 0);
    BuffDefense(90, BuffType.Poison, 20);
    ModifyStatMultiplicatively(MultiplicativeStatType.PoisonBuildup, 90, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.ToxicBuildup, 90, 1.2);
});

Event(60210000, Default, function() { // Red Leech Troches
    SpawnSFX(852, 249, 1, 7, 0, 0);
    BuffDefense(90, BuffType.Bleed, 20);
    ModifyStatMultiplicatively(MultiplicativeStatType.BleedBuildup, 90, 1.2);
});

Event(60220000, Default, function() { 
    SpawnSFX(853, 249, 1, 7, 0, 0);
    BuffDefense(90, BuffType.Unknown7, 20);
});

Event(60230000, Default, function() { // Triclops Snake Troches
    SpawnSFX(854, 249, 1, 7, 0, 0);
    BuffDefense(90, BuffType.Petrify, 20);
    ModifyStatMultiplicatively(MultiplicativeStatType.PetrifyBuildup, 90, 1.2);
});

Event(60240000, Default, function() { // Aromatic Ooze
    SpawnBuffSFX(901, 0.1, 0, 1, 0, 0);
    SpawnSFX(955, 20, 1, 0, 0, 0);
    IncreaseDamageMultiplicatively(90, BuffType.Magic, 20);
    ModifyDamageFlatToBaseAr(90, BuffType.Magic, 40);
});

Event(60250000, Default, function() { // Gold Pine Resin
    SpawnBuffSFX(909, 0.1, 0, 1, 0, 0);
    SpawnSFX(956, 20, 1, 0, 0, 0);
    IncreaseDamageMultiplicatively(90, BuffType.Lightning, 20);
    ModifyDamageFlatToBaseAr(90, BuffType.Lightning, 40);
});

Event(60260000, Default, function() { // Charcoal Pine Resin
    SpawnBuffSFX(903, 0.1, 0, 1, 0, 0);
    SpawnSFX(957, 20, 1, 0, 0, 0);
    SetStateInfo(StateInfoType.Unknown23, 90);
    IncreaseDamageMultiplicatively(90, BuffType.Fire, 20);
    ModifyDamageFlatToBaseAr(90, BuffType.Fire, 40);
});

Event(60270000, Default, function() { // Dark Pine Resin
    SpawnBuffSFX(905, 0.1, 0, 1, 0, 0);
    SpawnSFX(958, 20, 1, 0, 0, 0);
    IncreaseDamageMultiplicatively(90, BuffType.Dark, 20);
    ModifyDamageFlatToBaseAr(90, BuffType.Dark, 40);
});

Event(60280000, Default, function() { // Rotten Pine Resin
    SpawnBuffSFX(907, 0.1, 0, 1, 0, 0);
    SpawnSFX(959, 20, 1, 0, 0, 0);
    IncreaseDamageMultiplicatively(90, BuffType.Poison, 50);
    ModifyDamageFlatToBaseAr(90, BuffType.Poison, 100);
});

Event(60290000, Default, function() { // Bleeding Serum
    SpawnBuffSFX(921, 0.1, 0, 1, 0, 0);
    SpawnSFX(960, 20, 1, 0, 0, 0);
    IncreaseDamageMultiplicatively(90, BuffType.Bleed, 50);
    ModifyDamageFlatToBaseAr(90, BuffType.Bleed, 100);
});

Event(60310000, Default, function() { // Green Blossom
    HPRestorationEffect(1, 0.75);
    SpawnSFX(865, 249, 1, 50, 0, 0);
    ModifyStaminaRecovery(60, 1.15);
});

Event(60320000, Default, function() { // Rusted Coin
    SetStateInfoCategory(90, 0, 0);
    SpawnSFX(868, 9, 1, 60, 0, 0);
    SetStateInfo(StateInfoType.BoostItemDiscovery, 300);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown49, 300, 1);
});

Event(60350000, Default, function() { // Homeward Bone
    WarpPlayer(0, -1, -1);
    SetStateInfo(StateInfoType.BecomeInvulnerable, 5);
});

Event(60355000, Default, function() { // Aged Feather
    WarpPlayer(0, -1, -1);
    SetStateInfo(StateInfoType.BecomeInvulnerable, 5);
});

Event(60360000, Default, function() { // Darksign
    WarpPlayer(0, -1, -1);
    SetStateInfo(StateInfoType.BecomeInvulnerable, 5);
    SoulSubEvent(1, 931, 1, 1120403456); // 1120403456 = 100%
});

Event(60370000, Default, function() { // Silver Talisman
    ApplyRandomSpEffect(60370001, 60370002, 60370003, 60370004, 60370005);
});

Event(60370001, Default, function() { // Silver Talisman - Random Effect 1
    UnknownCommand10070002();
    ApplyChameleonDisguise(0, 0, 878);
});

Event(60370002, Default, function() { // Silver Talisman - Random Effect 2
    UnknownCommand10070002();
    ApplyChameleonDisguise(0, 1, 878);
});

Event(60370003, Default, function() { // Silver Talisman - Random Effect 3
    UnknownCommand10070002();
    ApplyChameleonDisguise(0, 2, 878);
});

Event(60370004, Default, function() { // Silver Talisman - Random Effect 4
    UnknownCommand10070002();
    ApplyChameleonDisguise(0, 3, 878);
});

Event(60370005, Default, function() { // Silver Talisman - Random Effect 5
    UnknownCommand10070002();
    ApplyChameleonDisguise(0, 4, 878);
});

Event(60375000, Default, function() { // UNKNOWN
    UnknownCommand100020(60375001);
});

Event(60375001, Default, function() { // UNKNOWN
    UnknownCommand10070002();
    UnknownCommand100021(0, 0, 878);
});

Event(60405000, Default, function() { // Dragon Head Stone
    ApplyChrfullbodysfx(500010, 1);
    SetSpEffectLength(1);
    CreateBullet(60405000, 60405000, 0, 1);
});

Event(60405001, Default, function() { // Dragon Head Stone
    ForceArmor(21330100, 0, 0, 0);
});

Event(60405010, Default, function() { // Dragon Head Stone
    CreateBullet(60405030, 60405030, 0, 1);
    CreateBullet(60405010, 60405010, 0, 1);
    CreateBullet(60405011, 60405011, 0, 1);
});

Event(60405020, Default, function() { // Dragon Head Stone
    CreateBullet(60405030, 60405030, 0, 1);
    CreateBullet(60405020, 60405020, 0, 1);
    CreateBullet(60405011, 60405011, 0, 1);
});

Event(60405030, Default, function() { // Dragon Head Stone
    ApplyChrfullbodysfx(500020, 1);
    SetSpEffectLength(1);
});

Event(60406000, Default, function() { // Dragon Torso Stone
    ApplyChrfullbodysfx(500110, 1);
    SetSpEffectLength(1);
    CreateBullet(60406000, 60406000, 0, 1);
});

Event(60406001, Default, function() { // Dragon Torso Stone
    ForceArmor(21330100, 21330101, 21330102, 21330103);
});

Event(60406010, Default, function() { // Dragon Torso Stone
    CreateBullet(60406010, 60406010, 0, 1);
    CreateBullet(60406011, 60406011, 0, 1);
});

Event(60406020, Default, function() { // Dragon Torso Stone
    SpawnSFX(954, 249, 1, 0, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 5.5, 1.15);
});

Event(60406030, Default, function() { // Dragon Torso Stone
    ApplyChrfullbodysfx(500120, 1);
    SetSpEffectLength(1);
});

Event(60410000, Default, function() { // Repair Powder
    ModifyProperty(PlayerPropertyType.EquippedWeaponsDurability, 0, 30);
    ModifyProperty(PlayerPropertyType.EquippedArmorDurability, 0, 50);
    ModifyProperty(PlayerPropertyType.EquippedRingsDurability, 0, 20);
});

Event(60430000, Default, function() { // Flame Butterfly
    CreateBullet(60430000, 60430000, 0, 1);
});

Event(60450000, Default, function() { // Prism Stone
    ThrowPrismStone(26, 1065353216, 1066192077);
});

Event(60470000, Default, function() { // Hello Carving
    CreateBullet(60470000, 60470000, 0, 1);
});

Event(60480000, Default, function() { // Thank You Carving
    CreateBullet(60480000, 60480000, 0, 1);
});

Event(60490000, Default, function() { // I'm Sorry Carving
    CreateBullet(60490000, 60490000, 0, 1);
});

Event(60500000, Default, function() { // Very Good! Carving
    CreateBullet(60500000, 60500000, 0, 1);
});

Event(60510000, Default, function() { // Rubbish
    StatusSubEvent(1, 872, 8, 1092616192, 0, 0, 650, 249);
});

Event(60530000, Default, function() { // Alluring Skull
    CreateBullet(60530000, 60530000, 0, 1);
});

Event(60531000, Default, function() { // Lloyd's Talisman
    CreateBullet(60531000, 60531000, 0, 1);
});

Event(60531010, Default, function() { // Lloyd's Talisman
    SpawnSFX(826, 249, 1, 2, 0, 0);
    ModifyEstusUsage(EstusModificationType.Reduceto0, 30);
});

Event(60540000, Default, function() { // Throwing Knife
    CreateBullet(60540000, 60540000, 2, 0.26);
});

Event(60550000, Default, function() { // Witching Urn
    CreateBullet(60550000, 60550000, 3, 0.65);
});

Event(60560000, Default, function() { // Lightning Urn
    CreateBullet(60560000, 60560000, 4, 0.65);
});

Event(60570000, Default, function() { // Firebomb
    CreateBullet(60570000, 60570000, 5, 0.65);
});

Event(60575000, Default, function() { // Black Firebomb
    CreateBullet(60575000, 60575000, 5, 0.75);
});

Event(60580000, Default, function() { // Hexing Urn
    CreateBullet(60580000, 60580000, 6, 0.65);
});

Event(60590000, Default, function() { // Poison Throwing Knife
    CreateBullet(60590000, 60590000, 2, 0.26);
});

Event(60595000, Default, function() { // Dung Pie
    CreateBullet(60595000, 60595000, 0, 1);
    CreateBullet(60595010, 60595010, 7, 0.65);
});

Event(60600000, Default, function() { // Lacerating Knife
    CreateBullet(60600000, 60600000, 2, 0.26);
});

Event(60610000, Default, function() { // Corrosive Urn
    CreateBullet(60610000, 60610000, 0, 1);
});

Event(60610010, Default, function() { // Corrosive Urn
    ModifyProperty(PlayerPropertyType.EquippedLeftHandWeaponDurability, 0, -5);
    ModifyProperty(PlayerPropertyType.EquippedRightHandWeaponDurability, 0, -5);
    ModifyProperty(PlayerPropertyType.EquippedArmorDurability, 0, -10);
});

Event(60620000, Default, function() { // Holy Water Urn
    CreateBullet(60620000, 60620000, 4, 1);
});

Event(60625000, Default, function() { // Fading Soul
    SoulSubEvent(1, 930, 0, 50);
});

Event(60630000, Default, function() { // Soul of a Lost Undead
    SoulSubEvent(1, 930, 0, 200);
});

Event(60640000, Default, function() { // Large Soul of a Lost Undead
    SoulSubEvent(1, 930, 0, 400);
});

Event(60650000, Default, function() { // Soul of a Nameless Soldier
    SoulSubEvent(1, 930, 0, 800);
});

Event(60660000, Default, function() { // Large Soul of a Nameless Soldier
    SoulSubEvent(1, 930, 0, 1000);
});

Event(60670000, Default, function() { // Soul of a Proud Knight
    SoulSubEvent(1, 930, 0, 2000);
});

Event(60680000, Default, function() { // Large Soul of a Proud Knight
    SoulSubEvent(1, 930, 0, 3000);
});

Event(60690000, Default, function() { // Soul of a Brave Warrior
    SoulSubEvent(1, 930, 0, 5000);
});

Event(60700000, Default, function() { // Large Soul of a Brave Warrior
    SoulSubEvent(1, 930, 0, 8000);
});

Event(60710000, Default, function() { // Soul of a Hero
    SoulSubEvent(1, 930, 0, 10000);
});

Event(60720000, Default, function() { // Soul of a Great Hero
    SoulSubEvent(1, 930, 0, 20000);
});

Event(62000000, Default, function() { // Dried Fingers
    ResetInvasionCooldownTimer();
});

Event(62020000, Default, function() { // Bone of Order
    RequestMultiplayerPenaltyErasure();
});

Event(62030000, Default, function() { // White Sign Soapstone
    InitiateClientmediatedMultiplayerItem(ClientItemType.WhiteSignSoapstone);
});

Event(62040000, Default, function() { // Small White Sign Soapstone
    InitiateClientmediatedMultiplayerItem(ClientItemType.SmallWhiteSignSoapstone);
});

Event(62045000, Default, function() { // Red Sign Soapstone
    InitiateClientmediatedMultiplayerItem(ClientItemType.RedSignSoapstone);
});

Event(62050000, Default, function() { // Cracked Blue Eye Orb
    InitiateServermediatedMultiplayerItem(ServerItemType.CrackedBlueEyeOrb);
});

Event(62060000, Default, function() { // Cracked Red Eye Orb
    InitiateServermediatedMultiplayerItem(ServerItemType.CrackedRedEyeOrb);
});

Event(62070000, Default, function() { // Dragon Eye
    InitiateClientmediatedMultiplayerItem(ClientItemType.DragonEye);
});

Event(62100000, Default, function() { // Token of Fidelity
    ApplySpEffectToFriendlyHost(62100010);
});

Event(62100010, Default, function() { // Token of Fidelity - Host
    SpawnSFX(1128, 249, 1, 0, 0, 0);
    HealSubEvent(1, 850, 350, 5, 1);
});

Event(62110000, Default, function() { // Token of Spite
    ResetInvasionCooldownTimer();
});

Event(62160000, Default, function() { // Black Separation Crystal
    RequestMultiplayerSeparation();
});

Event(62170000, Default, function() { // Seed of a Tree of Giants
    SpawnSFX(1124, 249, 1, 7, 0, 0);
    SetSpEffectLength(3600);
});

Event(62170010, Default, function() { // Seed of a Tree of Giants
    SetStateInfo(StateInfoType.EnemiesAttackHostileIntruders, 3600);
});

Event(64000000, Default, function() { // Soul of the Pursuer
    SoulSubEvent(1, 930, 0, 8000);
});

Event(64010000, Default, function() { // Soul of the Last Giant
    SoulSubEvent(1, 930, 0, 6000);
});

Event(64020000, Default, function() { // Dragonrider Soul
    SoulSubEvent(1, 930, 0, 6000);
});

Event(64030000, Default, function() { // Old Dragonslayer Soul
    SoulSubEvent(1, 930, 0, 10000);
});

Event(64040000, Default, function() { // Flexile Sentry Soul
    SoulSubEvent(1, 930, 0, 6000);
});

Event(64050000, Default, function() { // Ruin Sentinel Soul
    SoulSubEvent(1, 930, 0, 6000);
});

Event(64060000, Default, function() { // Soul of the Lost Sinner
    SoulSubEvent(1, 930, 0, 25000);
});

Event(64070000, Default, function() { // Executioner's Chariot Soul
    SoulSubEvent(1, 930, 0, 8000);
});

Event(64080000, Default, function() { // Skeleton Lord's Soul
    SoulSubEvent(1, 930, 0, 6000);
});

Event(64090000, Default, function() { // Covetous Demon Soul
    SoulSubEvent(1, 930, 0, 6000);
});

Event(64100000, Default, function() { // Mytha, the Baneful Queen Soul
    SoulSubEvent(1, 930, 0, 10000);
});

Event(64110000, Default, function() { // Smelter Demon Soul
    SoulSubEvent(1, 930, 0, 8000);
});

Event(64120000, Default, function() { // Old Iron King Soul
    SoulSubEvent(1, 930, 0, 25000);
});

Event(64130000, Default, function() { // Royal Rat Vanguard Soul
    SoulSubEvent(1, 930, 0, 6000);
});

Event(64140000, Default, function() { // Soul of the Rotten
    SoulSubEvent(1, 930, 0, 25000);
});

Event(64150000, Default, function() { // Scorpioness Najka Soul
    SoulSubEvent(1, 930, 0, 8000);
});

Event(64160000, Default, function() { // Royal Rat Authority Soul
    SoulSubEvent(1, 930, 0, 6000);
});

Event(64170000, Default, function() { // Soul of the Duke's Dear Freja
    SoulSubEvent(1, 930, 0, 25000);
});

Event(64180000, Default, function() { // Looking Glass Knight Soul
    SoulSubEvent(1, 930, 0, 18000);
});

Event(64190000, Default, function() { // Demon of Song Soul
    SoulSubEvent(1, 930, 0, 12000);
});

Event(64200000, Default, function() { // Soul of Velstadt
    SoulSubEvent(1, 930, 0, 15000);
});

Event(64210000, Default, function() { // Soul of the King
    SoulSubEvent(1, 930, 0, 50000);
});

Event(64220000, Default, function() { // Guardian Dragon Soul
    SoulSubEvent(1, 930, 0, 14000);
});

Event(64230000, Default, function() { // Ancient Dragon Soul
    SoulSubEvent(1, 930, 0, 75000);
});

Event(64240000, Default, function() { // Giant Lord Soul
    SoulSubEvent(1, 930, 0, 25000);
});

Event(64250000, Default, function() { // Soul of Nashandra
    SoulSubEvent(1, 930, 0, 30000);
});

Event(64260000, Default, function() { // Throne Defender Soul
    SoulSubEvent(1, 930, 0, 16000);
});

Event(64270000, Default, function() { // Throne Watcher Soul
    SoulSubEvent(1, 930, 0, 16000);
});

Event(64280000, Default, function() { // Darklurker Soul
    SoulSubEvent(1, 930, 0, 22000);
});

Event(64290000, Default, function() { // Belfry Gargoyle Soul
    SoulSubEvent(1, 930, 0, 6000);
});

Event(64300000, Default, function() { // Old Witch Soul
    SoulSubEvent(1, 930, 0, 60000);
});

Event(64310000, Default, function() { // Old King Soul
    SoulSubEvent(1, 930, 0, 75000);
});

Event(64320000, Default, function() { // Old Dead One Soul
    SoulSubEvent(1, 930, 0, 60000);
});

Event(64330000, Default, function() { // Old Paledrake Soul
    SoulSubEvent(1, 930, 0, 60000);
});

Event(64530000, Default, function() { // Soul of Elana, Squalid Queen
    SoulSubEvent(1, 930, 0, 30000);
});

Event(64540000, Default, function() { // Soul of Nadalia, Bride of Ash
    SoulSubEvent(1, 930, 0, 30000);
});

Event(64550000, Default, function() { // Soul of Alsanna, Silent Oracle
    SoulSubEvent(1, 930, 0, 30000);
});

Event(64580000, Default, function() { // Soul of the Ivory King
    SoulSubEvent(1, 930, 0, 30000);
});

Event(64500000, Default, function() { // Soul of Sinh, the Slumbering Dragon
    SoulSubEvent(1, 930, 0, 16000);
});

Event(64510000, Default, function() { // Soul of the Fume Knight
    SoulSubEvent(1, 930, 0, 16000);
});

Event(64520000, Default, function() { // Soul of Aava, the King's Pet
    SoulSubEvent(1, 930, 0, 16000);
});

Event(64560000, Default, function() { // Soul of Sir Alonne
    SoulSubEvent(1, 930, 0, 16000);
});

Event(64590000, Default, function() { // Soul of Zallen, the King's Pet
    SoulSubEvent(1, 930, 0, 16000);
});

Event(64600000, Default, function() { // Loyce Soul
    SoulSubEvent(1, 930, 0, 0);
});

Event(64610000, Default, function() { // Soul of Lud, the King's Pet
    SoulSubEvent(1, 930, 0, 16000);
});

Event(60036000, Default, function() { // Dried Root
    SpawnSFX(972, 249, 1, 25, 0, 0);
    HPRestorationEffect(0.7, 1);
    HealSubEvent(1, 850, 1000, 500, 0);
});

Event(60235000, Default, function() { // Old Growth Balm
    SpawnSFX(962, 249, 1, 7, 0, 0);
    ModifyStatAdditively(AdditiveStatType.Strength, 45, 5);
});

Event(60236000, Default, function() { // Vine Balm 
    SpawnSFX(964, 249, 1, 7, 0, 0);
    ModifyStatAdditively(AdditiveStatType.Dexterity, 45, 5);
});

Event(60237000, Default, function() { // Blackweed Balm
    SpawnSFX(966, 249, 1, 7, 0, 0);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 45, 5);
});

Event(60238000, Default, function() { // Goldenfruit Balm
    SpawnSFX(968, 249, 1, 7, 0, 0);
    ModifyStatAdditively(AdditiveStatType.Faith, 45, 5);
});

Event(60239000, Default, function() { // Brightbug
    SpawnSFX(969, 20, 0, 0, 0, 0);
    SpawnSFX(970, 249, 1, 7, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRateII, 120, 1.2);
    ModifyStatMultiplicatively(MultiplicativeStatType.IncomingDamageRateII, 120, 0.8);
});

Event(65240000, Default, function() { // Aromatic Ooze
    SpawnBuffSFX(901, 0.1, 0, 1, 0, 0);
    SpawnSFX(955, 20, 1, 0, 0, 0);
    BuffDamageUnknown(90, BuffType.Magic, 100);
});

Event(65250000, Default, function() { // Gold Pine Resin
    SpawnBuffSFX(909, 0.1, 0, 1, 0, 0);
    SpawnSFX(956, 20, 1, 0, 0, 0);
    BuffDamageUnknown(90, BuffType.Lightning, 100);
});

Event(65260000, Default, function() { // Charcoal Pine Resin
    SpawnBuffSFX(903, 0.1, 0, 1, 0, 0);
    SpawnSFX(957, 20, 1, 0, 0, 0);
    SetStateInfo(StateInfoType.Unknown23, 90);
    BuffDamageUnknown(90, BuffType.Fire, 100);
});

Event(65270000, Default, function() { // Dark Pine Resin
    SpawnBuffSFX(905, 0.1, 0, 1, 0, 0);
    SpawnSFX(958, 20, 1, 0, 0, 0);
    BuffDamageUnknown(90, BuffType.Dark, 100);
});

Event(65280000, Default, function() { // Rotten Pine Resin
    SpawnBuffSFX(907, 0.1, 0, 1, 0, 0);
    SpawnSFX(959, 20, 1, 0, 0, 0);
    BuffDamageUnknown(90, BuffType.Poison, 40);
});

Event(65290000, Default, function() { // Bleeding Serum
    SpawnBuffSFX(921, 0.1, 0, 1, 0, 0);
    SpawnSFX(960, 20, 1, 0, 0, 0);
    BuffDamageUnknown(90, BuffType.Bleed, 40);
});
