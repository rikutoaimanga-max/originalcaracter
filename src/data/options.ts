export interface OptionItem {
    id: string;
    label: string;
    value: string;
    imageSrc: string;
    description?: string;
}

export interface Category {
    id: string;
    label: string;
    items: OptionItem[];
}

export const initialSelections = {
    race: "human",
};

// 蜈ｱ騾壹・繝ｩ繝ｳ繝繝�鬆・岼螳夂ｾｩ
const randomOption: OptionItem = {
    id: "random",
    label: "繝ｩ繝ｳ繝繝�",
    value: "random",
    imageSrc: "/images/ui/random_icon.png", // 蟆ら畑繧｢繧､繧ｳ繝ｳ縺後≠繧後・蟾ｮ縺玲崛縺・
    description: "縺翫∪縺九○"
};

export const categories: Category[] = [
    {
        id: "race",
        label: "遞ｮ譌・,
        items: [
            randomOption,
            { id: "human", label: "莠ｺ髢・, value: "human", imageSrc: "/images/race / human.png", description: "讓呎ｺ也噪縺ｪ莠ｺ髢・ },
            {
                id: "elf", label: "繧ｨ繝ｫ繝・, value: "elf, pointed ears", imageSrc: "/images/race / elf.png", description: "蟆悶▲縺溯ｳ繧呈戟縺､髟ｷ蜻ｽ遞ｮ" },
            { id: "beast", label: "迯｣莠ｺ", value: "beastkin, animal ears, tail", imageSrc: "/images/race/beast.png", description: "蜍慕黄縺ｮ迚ｹ蠕ｴ繧呈戟縺､遞ｮ譌・ },
            { id: "dragon", label: "遶應ｺｺ", value: "dragonoid, dragon wings, horns, tail", imageSrc: "/images/race/dragon.png", description: "遶懊・陦繧貞ｼ輔￥遞ｮ譌・ },
            { id: "angel", label: "螟ｩ菴ｿ", value: "angel, halo, wings", imageSrc: "/images/race/angel.png", description: "閭御ｸｭ縺ｫ鄙ｼ繧呈戟縺､逾櫁＊縺ｪ蟄伜惠" },
            {
                id: "demon", label: "謔ｪ鬲・, value: "demon, horns, bat wings", imageSrc: "/images/race / demon.png", description: "隗偵→鄙ｼ繧呈戟縺､髣・・菴丈ｺｺ" },
            { id: "vampire", label: "繝ｴ繧｡繝ｳ繝代う繧｢", value: "vampire, pale skin, fangs", imageSrc: "/images/race/vampire.png", description: "髣・↓逕溘″繧句精陦鬯ｼ" },
            {
                id: "android", label: "繧｢繝ｳ繝峨Ο繧､繝・, value: "android, mechanical parts", imageSrc: "/images/race / android.png", description: "讖滓｢ｰ蛹悶＆繧後◆莠ｺ騾�莠ｺ髢・ },
        ],
    },
    {
        id: "gender",
        label: "諤ｧ蛻･",
        items: [
            randomOption,
            { id: "female", label: "螂ｳ諤ｧ", value: "girl, female", imageSrc: "https://placehold.co/400x400/png?text=Female", description: "" },
            { id: "male", label: "逕ｷ諤ｧ", value: "boy, male", imageSrc: "https://placehold.co/400x400/png?text=Male", description: "" },
            { id: "androgynous", label: "荳ｭ諤ｧ", value: "androgynous", imageSrc: "https://placehold.co/400x400/png?text=Other", description: "" },
        ],
    },
    {
        id: "body",
        label: "菴捺�ｼ",
        items: [
            randomOption,
            { id: "slender", label: "繧ｹ繝ｬ繝ｳ繝繝ｼ", value: "slender body", imageSrc: "https://placehold.co/400x400/png?text=Slender", description: "邏ｰ霄ｫ縺ｮ菴灘梛" },
            { id: "athletic", label: "遲玖ｉ雉ｪ", value: "athletic body, muscular", imageSrc: "https://placehold.co/400x400/png?text=Athletic", description: "蠑輔″邱�縺ｾ縺｣縺滉ｽ灘梛" },
            { id: "chubby", label: "縺ｽ縺｣縺｡繧・ｊ", value: "chubby body, plump", imageSrc: "https://placehold.co/400x400/png?text=Chubby", description: "譟斐ｉ縺九◎縺・↑菴灘梛" },
            { id: "child", label: "蟄蝉ｾ・, value: "child body, small stature", imageSrc: "https://placehold.co/400x400/png?text=Child", description: "蟆乗氛縺ｪ菴灘梛" },
        ],
    },
    {
        id: "eyes_shape",
        label: "逶ｮ縺ｮ蠖｢",
        items: [
            randomOption,
            { id: "tsurime", label: "縺､繧顔岼", value: "tsurime, sharp eyes", imageSrc: "https://placehold.co/400x400/png?text=Sharp", description: "繧ｭ繝ｪ繝・→縺励◆逶ｮ" },
            { id: "tareme", label: "縺溘ｌ逶ｮ", value: "tareme, droopy eyes", imageSrc: "https://placehold.co/400x400/png?text=Droopy", description: "蜆ｪ縺励◎縺・↑逶ｮ" },
            { id: "jitome", label: "繧ｸ繝育岼", value: "half-closed eyes", imageSrc: "https://placehold.co/400x400/png?text=Jitome", description: "蜊企幕縺阪・豌励□繧九￡縺ｪ逶ｮ" },
            { id: "round", label: "荳ｸ逶ｮ", value: "round eyes, big eyes", imageSrc: "https://placehold.co/400x400/png?text=Round", description: "縺ｱ縺｣縺｡繧翫＠縺滉ｸｸ縺・岼" },
        ],
    },
    {
        id: "eyes_color",
        label: "迸ｳ縺ｮ濶ｲ",
        items: [
            randomOption,
            { id: "red", label: "襍､", value: "red eyes", imageSrc: "https://placehold.co/400x400/ff0000/ffffff/png?text=Red" },
            { id: "blue", label: "髱・, value: "blue eyes", imageSrc: "https://placehold.co/400x400/0000ff/ffffff/png?text=Blue" },
            { id: "green", label: "邱・, value: "green eyes", imageSrc: "https://placehold.co/400x400/008000/ffffff/png?text=Green" },
            { id: "yellow", label: "鮟・, value: "yellow eyes", imageSrc: "https://placehold.co/400x400/ffff00/000000/png?text=Yellow" },
            { id: "purple", label: "邏ｫ", value: "purple eyes", imageSrc: "https://placehold.co/400x400/800080/ffffff/png?text=Purple" },
            { id: "heterochromia", label: "繧ｪ繝・ラ繧｢繧､", value: "heterochromia", imageSrc: "https://placehold.co/400x400/png?text=Odd" },
        ],
    },
    {
        id: "hair_style",
        label: "鬮ｪ蝙・,
        items: [
            randomOption,
            { id: "straight", label: "繧ｹ繝医Ξ繝ｼ繝医・繧｢", value: "straight hair", imageSrc: "/images/hair_style/繧ｹ繝医Ξ繝ｼ繝医・繧｢.png" },
            { id: "short_bangs", label: "遏ｭ縺・燕鬮ｪ", value: "(short bangs:1.3), forehead", imageSrc: "/images/hair_style/遏ｭ縺・燕鬮ｪ.png" },
            { id: "long_bangs", label: "髟ｷ縺・燕鬮ｪ", value: "(long bangs:1.3), eyes covered", imageSrc: "/images/hair_style/髟ｷ縺・燕鬮ｪ.png" },
            { id: "sotohane", label: "螟悶・縺ｭ", value: "flipped out hair", imageSrc: "/images/hair_style/螟悶・縺ｭ.png" },
            { id: "wave", label: "繧ｦ繧ｧ繝ｼ繝悶・繧｢", value: "wavy hair", imageSrc: "/images/hair_style/繧ｦ繧ｧ繝ｼ繝悶・繧｢.png" },

            { id: "bangs_parted_2", label: "2繝ｶ謇縺ｧ蛻・￠縺溷燕鬮ｪ", value: "parted bangs", imageSrc: "/images/hair_style/2繝ｶ謇縺ｧ蛻・￠縺溷燕鬮ｪ.png" },
            { id: "osage", label: "縺翫＆縺・, value: "braid", imageSrc: "/images/hair_style/縺翫＆縺・png" },
            { id: "odango", label: "縺雁屮蟄・, value: "hair bun", imageSrc: "/images/hair_style/縺雁屮蟄・png" },
            { id: "haneta_maegami", label: "縺ｯ縺ｭ縺溷燕鬮ｪ", value: "flipped hair bangs", imageSrc: "/images/hair_style/縺ｯ縺ｭ縺溷燕鬮ｪ.png" },
            { id: "pattsun", label: "縺ｱ縺｣縺､繧・, value: "blunt bangs", imageSrc: "/images/hair_style/縺ｱ縺｣縺､繧・png" },
            { id: "asymmetry", label: "繧｢繧ｷ繝ｳ繝｡繝医Μ", value: "asymmetrical hair", imageSrc: "/images/hair_style/繧｢繧ｷ繝ｳ繝｡繝医Μ.png" },
            { id: "ahoge", label: "繧｢繝帶ｯ・, value: "ahoge", imageSrc: "/images/hair_style/繧｢繝帶ｯ・png" },
            { id: "antenna", label: "繧｢繝ｳ繝・リ繝倥い", value: "antenna hair", imageSrc: "/images/hair_style/繧｢繝ｳ繝・リ繝倥い.png" },
            { id: "arched_bangs", label: "繧｢繝ｼ繝∫憾縺ｮ蜑埼ｫｪ", value: "arched bangs", imageSrc: "/images/hair_style/繧｢繝ｼ繝∫憾縺ｮ蜑埼ｫｪ.png" },
            { id: "wavy", label: "繧ｦ繧ｧ繝ｼ繝悶・繧｢", value: "wavy hair", imageSrc: "/images/hair_style/繧ｦ繧ｧ繝ｼ繝悶・繧｢.png" },
            { id: "crown_braid", label: "繧ｯ繝ｩ繧ｦ繝ｳ繝悶Ξ繧､繝・, value: "crown braid", imageSrc: "/images/hair_style/繧ｯ繝ｩ繧ｦ繝ｳ繝悶Ξ繧､繝・png" },
            { id: "cornrows", label: "繧ｳ繝ｼ繝ｳ繝ｭ繧ｦ", value: "cornrows", imageSrc: "/images/hair_style/繧ｳ繝ｼ繝ｳ繝ｭ繧ｦ.png" },
            { id: "side_twintails", label: "繧ｵ繧､繝峨ヤ繧､繝ｳ繝・輔Ν", value: "side twintails", imageSrc: "/images/hair_style/繧ｵ繧､繝峨ヤ繧､繝ｳ繝・輔Ν.png" },
            { id: "side_bun", label: "繧ｵ繧､繝峨ヰ繝ｳ", value: "side bun", imageSrc: "/images/hair_style/繧ｵ繧､繝峨ヰ繝ｳ.png" },
            { id: "side_braid", label: "繧ｵ繧､繝峨ヶ繝ｬ繧､繝・, value: "side braid", imageSrc: "/images/hair_style/繧ｵ繧､繝峨ヶ繝ｬ繧､繝・png" },
            { id: "side_pony", label: "繧ｵ繧､繝峨・繝九・", value: "side ponytail", imageSrc: "/images/hair_style/繧ｵ繧､繝峨・繝九・.png" },
            { id: "short_twintails", label: "繧ｷ繝ｧ繝ｼ繝医ヤ繧､繝ｳ繝・輔Ν", value: "short twintails", imageSrc: "/images/hair_style/繧ｷ繝ｧ繝ｼ繝医ヤ繧､繝ｳ繝・輔Ν.png" },
            { id: "see_through_bangs", label: "繧ｷ繝ｼ繧ｹ繝ｫ繝ｼ繝舌Φ繧ｰ", value: "see-through bangs", imageSrc: "/images/hair_style/繧ｷ繝ｼ繧ｹ繝ｫ繝ｼ繝舌Φ繧ｰ.png" },
            { id: "straight", label: "繧ｹ繝医Ξ繝ｼ繝医・繧｢", value: "straight hair", imageSrc: "/images/hair_style/繧ｹ繝医Ξ繝ｼ繝医・繧｢.png" },
            { id: "center_bangs_droop", label: "繧ｻ繝ｳ繧ｿ繝ｼ縺ｫ蝙ゅｌ縺溷燕鬮ｪ", value: "bangs, center hair", imageSrc: "/images/hair_style/繧ｻ繝ｳ繧ｿ繝ｼ縺ｫ蝙ゅｌ縺溷燕鬮ｪ.png" },
            { id: "center_part", label: "繧ｻ繝ｳ繧ｿ繝ｼ蛻・￠", value: "center parting", imageSrc: "/images/hair_style/繧ｻ繝ｳ繧ｿ繝ｼ蛻・￠.png" },
            { id: "twintails", label: "繝・う繝ｳ繝・・繝ｫ", value: "twintails", imageSrc: "/images/hair_style/繝・う繝ｳ繝・・繝ｫ.png" },
            { id: "drill_hair", label: "繝峨Μ繝ｫ繝倥い", value: "drill hair", imageSrc: "/images/hair_style/繝峨Μ繝ｫ繝倥い.png" },
            { id: "dreadlocks", label: "繝峨Ξ繝・ラ繝ｭ繝・け", value: "dreadlocks", imageSrc: "/images/hair_style/繝峨Ξ繝・ラ繝ｭ繝・け.png" },
            { id: "high_twintails", label: "繝上う繝・う繝ｳ繝・輔Ν", value: "high twintails", imageSrc: "/images/hair_style/繝上う繝・う繝ｳ繝・輔Ν.png" },
            { id: "high_bun", label: "繝上う繝舌Φ", value: "high bun", imageSrc: "/images/hair_style/繝上う繝舌Φ.png" },
            { id: "high_ponytail", label: "繝上う繝昴ル繝ｼ繝・・繝ｫ", value: "high ponytail", imageSrc: "/images/hair_style/繝上う繝昴ル繝ｼ繝・・繝ｫ.png" },
            { id: "heart_ahoge", label: "繝上・繝医い繝帶ｯ・, value: "heart ahoge", imageSrc: "/images/hair_style/繝上・繝医い繝帶ｯ・png" },
            { id: "half_up", label: "繝上・繝輔い繝・・", value: "half updo", imageSrc: "/images/hair_style/繝上・繝輔い繝・・.png" },
            { id: "half_up_braid", label: "繝上・繝輔い繝・・繝悶Ξ繧､繝・, value: "half up braid", imageSrc: "/images/hair_style/繝上・繝輔い繝・・繝悶Ξ繧､繝・png" },
            { id: "pinned_bangs", label: "繝斐Φ逡吶ａ蜑埼ｫｪ", value: "pinned bangs", imageSrc: "/images/hair_style/繝斐Φ逡吶ａ蜑埼ｫｪ.png" },
            { id: "french_braid", label: "繝輔Ξ繝ｳ繝√ヶ繝ｬ繧､繝・, value: "french braid", imageSrc: "/images/hair_style/繝輔Ξ繝ｳ繝√ヶ繝ｬ繧､繝・png" },
            { id: "hair_bun", label: "繝倥い繝舌Φ", value: "hair bun", imageSrc: "/images/hair_style/繝倥い繝舌Φ.png" },
            { id: "ponytail", label: "繝昴ル繝ｼ繝・・繝ｫ", value: "ponytail", imageSrc: "/images/hair_style/繝昴ル繝ｼ繝・・繝ｫ.png" },
            { id: "ringlets", label: "繝ｪ繝ｳ繧ｰ繝ｬ繝・ヨ", value: "ringlets", imageSrc: "/images/hair_style/繝ｪ繝ｳ繧ｰ繝ｬ繝・ヨ.png" },
            { id: "low_twintails", label: "繝ｭ繝ｼ繝・う繝ｳ繝・・繝ｫ", value: "low twintails", imageSrc: "/images/hair_style/繝ｭ繝ｼ繝・う繝ｳ繝・・繝ｫ.png" },
            { id: "low_bun", label: "繝ｭ繝ｼ繝舌Φ", value: "low bun", imageSrc: "/images/hair_style/繝ｭ繝ｼ繝舌Φ.png" },
            { id: "low_ponytail", label: "繝ｭ繝ｼ繝昴ル繝ｼ繝・・繝ｫ", value: "low ponytail", imageSrc: "/images/hair_style/繝ｭ繝ｼ繝昴ル繝ｼ繝・・繝ｫ.png" },
            { id: "braid", label: "荳峨▽邱ｨ縺ｿ", value: "braid", imageSrc: "/images/hair_style/荳峨▽邱ｨ縺ｿ.png" },
            { id: "braided_twintails", label: "荳峨▽邱ｨ縺ｿ繝・う繝ｳ繝・・繝ｫ", value: "braided twintails", imageSrc: "/images/hair_style/荳峨▽邱ｨ縺ｿ繝・う繝ｳ繝・・繝ｫ.png" },
            { id: "single_braid", label: "荳峨▽邱ｨ縺ｿ・・譛ｬ・・, value: "single braid", imageSrc: "/images/hair_style/荳峨▽邱ｨ縺ｿ・・譛ｬ・・png" },
            { id: "multiple_braids", label: "荳峨▽邱ｨ縺ｿ・郁､・焚・・, value: "multiple braids", imageSrc: "/images/hair_style/荳峨▽邱ｨ縺ｿ・郁､・焚・・png" },
            { id: "hair_between_eyes", label: "荳｡逶ｮ縺ｮ髢薙・鬮ｪ", value: "hair between eyes", imageSrc: "/images/hair_style/荳｡逶ｮ縺ｮ髢薙・鬮ｪ.png" },
            { id: "crossed_bangs", label: "莠､蟾ｮ縺励◆蜑埼ｫｪ", value: "crossed bangs", imageSrc: "/images/hair_style/莠､蟾ｮ縺励◆蜑埼ｫｪ.png" },
            { id: "braided_bangs", label: "蜑埼ｫｪ縺ｫ邱ｨ縺ｿ霎ｼ縺ｿ", value: "braided bangs", imageSrc: "/images/hair_style/蜑埼ｫｪ縺ｫ邱ｨ縺ｿ霎ｼ縺ｿ.png" },
            { id: "moving_ahoge", label: "蜍輔￥繧｢繝帶ｯ・, value: "ahoge, moving", imageSrc: "/images/hair_style/蜍輔￥繧｢繝帶ｯ・png" },
            { id: "sotohane_2", label: "螟悶・縺ｭ", value: "flipped out hair", imageSrc: "/images/hair_style/螟悶・縺ｭ.png" },
            { id: "hime_cut", label: "蟋ｫ繧ｫ繝・ヨ", value: "hime cut", imageSrc: "/images/hair_style/蟋ｫ繧ｫ繝・ヨ.png" },
            { id: "tied_back", label: "蠕後ｍ縺ｫ縺ｾ縺ｨ繧√ｋ", value: "tied back hair", imageSrc: "/images/hair_style/蠕後ｍ縺ｫ縺ｾ縺ｨ繧√ｋ.png" },
            { id: "swept_back", label: "蠕後ｍ縺ｫ豬√＠縺滄ｫｪ", value: "swept back hair", imageSrc: "/images/hair_style/蠕後ｍ縺ｫ豬√＠縺滄ｫｪ.png" },
            { id: "diagonal_bangs", label: "譁懊ａ縺ｮ蜑埼ｫｪ", value: "diagonal bangs", imageSrc: "/images/hair_style/譁懊ａ縺ｮ蜑埼ｫｪ.png" },
            { id: "colored_ahoge", label: "譟薙ａ繧｢繝帶ｯ・, value: "colored ahoge", imageSrc: "/images/hair_style/譟薙ａ繧｢繝帶ｯ・png" },
            { id: "swept_bangs", label: "豬√＠縺溷燕鬮ｪ", value: "swept bangs", imageSrc: "/images/hair_style/豬√＠縺溷燕鬮ｪ.png" },
            { id: "hair_over_one_eye", label: "迚・岼縺ｫ縺九°繧矩ｫｪ", value: "hair over one eye", imageSrc: "/images/hair_style/迚・岼縺ｫ縺九°繧矩ｫｪ.png" },
            { id: "hair_over_eyes", label: "逶ｮ縺ｫ縺九°繧矩ｫｪ", value: "hair over eyes", imageSrc: "/images/hair_style/逶ｮ縺ｫ縺九°繧矩ｫｪ.png" },
            { id: "short_bangs_2", label: "遏ｭ縺・燕鬮ｪ", value: "(short bangs:1.3), forehead", imageSrc: "/images/hair_style/遏ｭ縺・燕鬮ｪ.png" },
            { id: "braided_bun", label: "邱ｨ縺ｿ霎ｼ縺ｿ繝舌Φ", value: "braided bun", imageSrc: "/images/hair_style/邱ｨ縺ｿ霎ｼ縺ｿ繝舌Φ.png" },
            { id: "braided_pony", label: "邱ｨ縺ｿ霎ｼ縺ｿ繝昴ル繝ｼ", value: "braided ponytail", imageSrc: "/images/hair_style/邱ｨ縺ｿ霎ｼ縺ｿ繝昴ル繝ｼ.png" },
            { id: "long_bangs_2", label: "髟ｷ縺・燕鬮ｪ", value: "long bangs", imageSrc: "/images/hair_style/髟ｷ縺・燕鬮ｪ.png" },
            { id: "side_tufts", label: "鬆ｭ縺ｮ蛛ｴ髱｢縺九ｉ莨ｸ縺ｳ繧区ｯ帶據", value: "side tufts", imageSrc: "/images/hair_style/鬆ｭ縺ｮ蛛ｴ髱｢縺九ｉ莨ｸ縺ｳ繧区ｯ帶據.png" },

            { id: "man_short", label: "遏ｭ鬮ｪ(逕ｷ)", value: "short hair, masculine", imageSrc: "/images/hair_style/man_short.png" },
            { id: "man_wolf", label: "繧ｦ繝ｫ繝・逕ｷ)", value: "wolf cut, masculine", imageSrc: "/images/hair_style/man_wolf.png" },
            { id: "man_slicked", label: "繧ｪ繝ｼ繝ｫ繝舌ャ繧ｯ", value: "slicked back hair", imageSrc: "/images/hair_style/man_slicked.png" },
        ],
    },
    {
        id: "hair_length",
        label: "鬮ｪ縺ｮ髟ｷ縺・,
        items: [
            randomOption,
            { id: "long", label: "繝ｭ繝ｳ繧ｰ", value: "long hair", imageSrc: "/images/hair_length/long.png" },
            { id: "very_long", label: "繝吶Μ繝ｼ繝ｭ繝ｳ繧ｰ", value: "very long hair", imageSrc: "/images/hair_length/very_long.png" },
            { id: "medium", label: "繝溘ョ繧｣繧｢繝�", value: "medium hair", imageSrc: "/images/hair_length/medium.png" },
            { id: "short", label: "繧ｷ繝ｧ繝ｼ繝・, value: "short hair", imageSrc: "/images/hair_length/short.png" },
            { id: "very_short", label: "繝吶Μ繝ｼ繧ｷ繝ｧ繝ｼ繝・, value: "very short hair", imageSrc: "/images/hair_length/very_short.png" },
            { id: "pixie", label: "繝斐け繧ｷ繝ｼ繧ｫ繝・ヨ", value: "pixie cut", imageSrc: "/images/hair_length/pixie.png" },
            { id: "bob", label: "繝懊ヶ", value: "bob cut", imageSrc: "/images/hair_length/bob.png" },
        ],
    },
    {
        id: "hair_color",
        label: "鬮ｪ縺ｮ濶ｲ",
        items: [
            randomOption,
            { id: "black", label: "鮟・, value: "black hair", imageSrc: "https://placehold.co/400x400/000000/ffffff/png?text=Black" },
            { id: "blonde", label: "驥・, value: "blonde hair", imageSrc: "https://placehold.co/400x400/ffd700/000000/png?text=Gold" },
            { id: "silver", label: "驫", value: "silver hair", imageSrc: "https://placehold.co/400x400/c0c0c0/000000/png?text=Silver" },
            { id: "red_hair", label: "襍､", value: "red hair", imageSrc: "https://placehold.co/400x400/ff0000/ffffff/png?text=Red" },
            { id: "blue_hair", label: "髱・, value: "blue hair", imageSrc: "https://placehold.co/400x400/0000ff/ffffff/png?text=Blue" },
            { id: "pink", label: "繝斐Φ繧ｯ", value: "pink hair", imageSrc: "https://placehold.co/400x400/ffc0cb/000000/png?text=Pink" },
            { id: "white", label: "逋ｽ", value: "white hair", imageSrc: "https://placehold.co/400x400/ffffff/000000/png?text=White" },
        ],
    },
    {
        id: "clothing",
        label: "陦｣陬・,
        items: [
            randomOption,
            { id: "school_uniform", label: "蛻ｶ譛・, value: "school uniform", imageSrc: "https://placehold.co/400x400/png?text=Uniform" },
            { id: "casual", label: "遘∵恪", value: "casual clothes, t-shirt, jeans", imageSrc: "https://placehold.co/400x400/png?text=Casual" },
            { id: "fantasy", label: "繝輔ぃ繝ｳ繧ｿ繧ｸ繝ｼ", value: "fantasy armor, robe", imageSrc: "https://placehold.co/400x400/png?text=Fantasy" },
            { id: "maid", label: "繝｡繧､繝画恪", value: "maid apron, dress", imageSrc: "https://placehold.co/400x400/png?text=Maid" },
            { id: "suit", label: "繧ｹ繝ｼ繝・, value: "formal suit", imageSrc: "https://placehold.co/400x400/png?text=Suit" },
            { id: "kimono", label: "逹迚ｩ", value: "kimono, japanese clothes", imageSrc: "https://placehold.co/400x400/png?text=Kimono" },
            { id: "sport", label: "繧ｹ繝昴・繝・え繧ｧ繧｢", value: "sportswear, jersey", imageSrc: "https://placehold.co/400x400/png?text=Sport" },
        ],
    },
    {
        id: "accessories",
        label: "陬・｣ｾ",
        items: [
            randomOption,
            { id: "none", label: "縺ｪ縺・, value: "", imageSrc: "https://placehold.co/400x400/png?text=None" },
            { id: "glasses", label: "繝｡繧ｬ繝・, value: "glasses", imageSrc: "https://placehold.co/400x400/png?text=Glasses" },
            { id: "hat", label: "蟶ｽ蟄・, value: "hat, cap", imageSrc: "https://placehold.co/400x400/png?text=Hat" },
            { id: "ribbon", label: "繝ｪ繝懊Φ", value: "hair ribbon", imageSrc: "https://placehold.co/400x400/png?text=Ribbon" },
            { id: "headphones", label: "繝倥ャ繝峨・繝ｳ", value: "headphones", imageSrc: "https://placehold.co/400x400/png?text=Headphones" },
            { id: "scarf", label: "繝槭ヵ繝ｩ繝ｼ", value: "scarf", imageSrc: "https://placehold.co/400x400/png?text=Scarf" },
        ],
    },
    {
        id: "expression",
        label: "陦ｨ諠・,
        items: [
            randomOption,
            { id: "smile", label: "隨鷹｡・, value: "smile, happy", imageSrc: "https://placehold.co/400x400/png?text=Smile" },
            { id: "angry", label: "諤偵ｊ", value: "angry, annoyed", imageSrc: "https://placehold.co/400x400/png?text=Angry" },
            { id: "sad", label: "謔ｲ縺励＞", value: "sad, crying", imageSrc: "https://placehold.co/400x400/png?text=Sad" },
            { id: "shy", label: "辣ｧ繧・, value: "blush, shy", imageSrc: "https://placehold.co/400x400/png?text=Shy" },
            { id: "surprised", label: "鬩壹″", value: "surprised, open mouth", imageSrc: "https://placehold.co/400x400/png?text=Surprised" },
            { id: "serious", label: "逵溷殴", value: "serious face", imageSrc: "https://placehold.co/400x400/png?text=Serious" },
        ],
    },
    {
        id: "situation",
        label: "繧ｷ繝√Η繧ｨ繝ｼ繧ｷ繝ｧ繝ｳ",
        items: [
            randomOption,
            { id: "studio", label: "繧ｹ繧ｿ繧ｸ繧ｪ", value: "simple background, white background", imageSrc: "https://placehold.co/400x400/png?text=Studio" },
            { id: "fantasy_forest", label: "譽ｮ", value: "fantasy forest, nature, trees", imageSrc: "https://placehold.co/400x400/png?text=Forest" },
            { id: "cyber_city", label: "繧ｵ繧､繝舌・繧ｷ繝・ぅ", value: "cyberpunk city, neon lights", imageSrc: "https://placehold.co/400x400/png?text=Cyber" },
            { id: "classroom", label: "謨吝ｮ､", value: "classroom, school desk", imageSrc: "https://placehold.co/400x400/png?text=Class" },
            { id: "cafe", label: "繧ｫ繝輔ぉ", value: "cafe, indoor, coffee", imageSrc: "https://placehold.co/400x400/png?text=Cafe" },
            { id: "sky", label: "髱堤ｩｺ", value: "blue sky, clouds, day", imageSrc: "https://placehold.co/400x400/png?text=Sky" },
        ],
    },
    {
        id: "hat",
        label: "蟶ｽ蟄舌・鬆ｭ驛ｨ陬・｣ｾ",
        items: [
            randomOption,
            // 繧ｫ繧ｸ繝･繧｢繝ｫ
            { id: "baseball_cap", label: "驥守帥蟶ｽ", value: "baseball cap", imageSrc: "/images/hat/驥守帥蟶ｽ.png" },
            { id: "beanie", label: "繝薙・繝九・", value: "beanie", imageSrc: "/images/hat/繝九ャ繝亥ｸｽ.png" },
            { id: "bucket_hat", label: "繝舌こ繝・ヨ繝上ャ繝・, value: "bucket hat", imageSrc: "/images/hat/繝舌こ繝・ヨ繝上ャ繝・png" },
            { id: "flat_cap", label: "繝上Φ繝√Φ繧ｰ", value: "flat cap", imageSrc: "/images/hat/繝上Φ繝√Φ繧ｰ蟶ｽ.png" },
            { id: "sun_hat", label: "縺､縺ｰ蠎・ｸｽ", value: "sun hat", imageSrc: "/images/hat/縺､縺ｰ蠎・ｸｽ繝ｻ繧ｵ繝ｳ繝上ャ繝・png" },
            { id: "straw_hat", label: "鮗ｦ繧上ｉ蟶ｽ蟄・, value: "straw hat", imageSrc: "/images/hat/鮗ｦ繧上ｉ蟶ｽ蟄・png" },
            { id: "beret", label: "繝吶Ξ繝ｼ蟶ｽ", value: "beret", imageSrc: "/images/hat/繝吶Ξ繝ｼ蟶ｽ.png" },
            { id: "boater_hat", label: "繧ｫ繝ｳ繧ｫ繝ｳ蟶ｽ", value: "boater hat", imageSrc: "/images/hat/繧ｫ繝ｳ繧ｫ繝ｳ蟶ｽ.png" },
            { id: "bowler_hat", label: "螻ｱ鬮伜ｸｽ", value: "bowler hat", imageSrc: "/images/hat/螻ｱ鬮伜ｸｽ繝ｻ繝懊・繝ｩ繝ｼ繝上ャ繝・png" },
            { id: "bonnet", label: "繝懊Φ繝阪ャ繝・, value: "bonnet", imageSrc: "/images/hat/繝懊Φ繝阪ャ繝・png" },
            { id: "cabbie_hat", label: "繧ｭ繝｣繝薙・繝上ャ繝・, value: "cabbie hat", imageSrc: "/images/hat/繧ｭ繝｣繝凪輔ワ繝・ヨ.png" },
            { id: "deerstalker", label: "鮖ｿ謦・■蟶ｽ", value: "deerstalker", imageSrc: "/images/hat/鮖ｿ謦・■蟶ｽ.png" },
            { id: "fedora", label: "荳ｭ謚倥ｌ蟶ｽ", value: "fedora", imageSrc: "/images/hat/繝輔ぉ繝峨・繝ｩ縲∽ｸｭ謚倥ｌ蟶ｽ.png" },
            { id: "top_hat", label: "繧ｷ繝ｫ繧ｯ繝上ャ繝・, value: "top hat", imageSrc: "/images/hat/繧ｷ繝ｫ繧ｯ繝上ャ繝・png" },
            // 閨ｷ讌ｭ繝ｻ繧､繝吶Φ繝医・縺昴・莉・
            { id: "military_hat", label: "霆榊ｸｽ", value: "military hat", imageSrc: "/images/hat/霆榊ｸｽ.png" },
            { id: "police_hat", label: "隴ｦ螳伜ｸｽ", value: "police hat", imageSrc: "/images/hat/隴ｦ蟇溷ｸｽ.png" },
            { id: "nurse_cap", label: "繝翫・繧ｹ繧ｭ繝｣繝・・", value: "nurse cap", imageSrc: "/images/hat/繝翫・繧ｹ繧ｭ繝｣繝・・.png" },
            { id: "chef_hat", label: "繧ｳ繝・け蟶ｽ", value: "chef hat", imageSrc: "/images/hat/繧ｳ繝・け蟶ｽ縲∬ｪｿ逅・ｸｽ.png" },
            { id: "school_hat", label: "蟄ｦ逕溷ｸｽ", value: "school hat", imageSrc: "/images/hat/蟄ｦ逕溷ｸｽ.png" },
            { id: "mortarboard", label: "隗貞ｸｽ", value: "mortarboard", imageSrc: "/images/hat/隗貞ｸｽ.png" },
            { id: "sailor_hat", label: "繧ｻ繝ｼ繝ｩ繝ｼ繝上ャ繝・, value: "sailor hat", imageSrc: "/images/hat/繧ｻ繝ｼ繝ｩ繝ｼ繝上ャ繝・png" },
            { id: "cowboy_hat", label: "繧ｫ繧ｦ繝懊・繧､", value: "cowboy hat", imageSrc: "/images/hat/繧ｫ繧ｦ繝懊・繧､繝上ャ繝・png" },
            { id: "pirate_hat", label: "豬ｷ雉雁ｸｽ", value: "pirate hat", imageSrc: "/images/hat/豬ｷ雉雁ｸｽ.jpg" },

            { id: "cat_hat", label: "迪ｫ閠ｳ蟶ｽ蟄・, value: "cat hat", imageSrc: "/images/hat/迪ｫ蟶ｽ蟄・png" },
            { id: "helmet", label: "繝倥Ν繝｡繝・ヨ", value: "helmet", imageSrc: "/images/hat/繝舌う繧ｯ繝倥Ν繝｡繝・ヨ.png" },
            { id: "crown", label: "邇句・", value: "crown", imageSrc: "/images/hat/邇句・.png" },
            { id: "tiara", label: "繝・ぅ繧｢繝ｩ", value: "tiara", imageSrc: "/images/hat/繝・ぅ繧｢繝ｩ.png" },

            { id: "hair_ribbon", label: "繝ｪ繝懊Φ", value: "hair ribbon", imageSrc: "/images/hat/鬮ｪ繝ｪ繝懊Φ.png" },
            { id: "papakha", label: "繝代ヱ繝ｼ繝・, value: "papakha", imageSrc: "/images/hat/繝代ヱ繝ｼ繝・png" },
            { id: "ushanka", label: "繧ｦ繧ｷ繝｣繝ｳ繧ｫ", value: "ushanka", imageSrc: "/images/hat/繧ｦ繧ｷ繝｣繝ｳ繧ｫ.png" },
            { id: "turban", label: "繧ｿ繝ｼ繝舌Φ", value: "turban", imageSrc: "/images/hat/繧ｿ繝ｼ繝舌Φ.png" },

            // 霑ｽ蜉�蛻・ｼ壹◎縺ｮ莉悶・迚ｹ谿・
            { id: "fur_hat", label: "繝輔ぃ繝ｼ繝上ャ繝・, value: "fur hat", imageSrc: "/images/hat/繝輔ぃ繝ｼ繝上ャ繝・png" },

            { id: "picture_hat", label: "繝斐け繝√Ε繝ｼ繝上ャ繝・, value: "picture hat", imageSrc: "/images/hat/繝斐け繝√Ε繝ｼ繝上ャ繝・png" },
            { id: "cavalier_hat", label: "繧ｫ繝ｴ繧｡繝ｪ繧ｨ繝上ャ繝・, value: "cavalier hat", imageSrc: "/images/hat/繧ｫ繝ｴ繧｡繝ｪ繧ｨ繝上ャ繝医鄒ｽ譬ｹ莉倥″蠎・▽縺ｰ蟶ｽ, 雋ｴ譌丞ｸｽ.png" },
            { id: "mini_top_hat", label: "繝溘ル繧ｷ繝ｫ繧ｯ繝上ャ繝・, value: "mini top hat", imageSrc: "/images/hat/蟆上＆縺・す繝ｫ繧ｯ繝上ャ繝・png" },
            { id: "female_service_cap", label: "螂ｳ諤ｧ逕ｨ蛻ｶ蟶ｽ", value: "female service cap", imageSrc: "/images/hat/螂ｳ諤ｧ逕ｨ蛻ｶ蟶ｽ.png" },
            { id: "garrison_cap", label: "繧ｮ繝｣繝ｪ繧ｽ繝ｳ繧ｭ繝｣繝・・", value: "garrison cap", imageSrc: "/images/hat/繧ｮ繝｣繝ｪ繧ｽ繝ｳ繧ｭ繝｣繝・・.png" },
            { id: "field_cap", label: "繝輔ぅ繝ｼ繝ｫ繝峨く繝｣繝・・", value: "field cap", imageSrc: "/images/hat/繝輔ぅ繝ｼ繝ｫ繝峨く繝｣繝・・.png" },
            { id: "shako_cap", label: "繧ｷ繝｣繧ｳ繝ｼ蟶ｽ", value: "shako cap", imageSrc: "/images/hat/繧ｷ繝｣繧ｳ繝ｼ蟶ｽ.png" },
            { id: "mitre", label: "繝溘ヨ繝ｩ", value: "mitre", imageSrc: "/images/hat/繝溘ヨ繝ｩ(蜿ｸ謨吝・).png" },
            { id: "bicorne", label: "莠瑚ｧ貞ｸｽ", value: "bicorne", imageSrc: "/images/hat/莠瑚ｧ貞ｸｽ.png" },
            // 譁・喧繝ｻ豌第酪
            { id: "tokin_hat", label: "鬆ｭ蟾ｾ", value: "tokin hat", imageSrc: "/images/hat/鬆ｭ蟾ｾ.png" },
            { id: "tate_eboshi", label: "遶狗ワ蟶ｽ蟄・, value: "tate eboshi", imageSrc: "/images/hat/遶狗ワ蟶ｽ蟄・png" },
            { id: "qingdai_guanmao", label: "貂・ｻ｣螳伜ｸｽ", value: "qingdai guanmao", imageSrc: "/images/hat/貂・ｻ｣螳伜ｸｽ.png" },
            { id: "rice_hat", label: "隨�", value: "rice hat", imageSrc: "/images/hat/隨�.png" },
            { id: "ajirogasa", label: "邯ｲ莉｣隨�", value: "ajirogasa", imageSrc: "/images/hat/邯ｲ莉｣隨�・医≠縺倥ｍ縺後＆・・png" },
            { id: "ichimegasa", label: "蟶ょ･ｳ隨�", value: "ichimegasa", imageSrc: "/images/hat/蟶ょ･ｳ隨�・医＞縺｡繧√′縺包ｼ・png" },
            { id: "sandogasa", label: "荳牙ｺｦ隨�", value: "sandogasa", imageSrc: "/images/hat/荳牙ｺｦ隨�・医＆繧薙←縺後＆・・png" },
            { id: "keffiyeh", label: "繧ｱ繝輔ぅ繝ｼ繝､", value: "keffiyeh", imageSrc: "/images/hat/keffiyeh.png" },
            { id: "hijab", label: "繝偵ず繝｣繝・, value: "hijab", imageSrc: "/images/hat/繝偵ず繝｣繝・png" },
            { id: "sombrero", label: "繧ｽ繝ｳ繝悶Ξ繝ｭ", value: "sombrero", imageSrc: "/images/hat/繧ｽ繝ｳ繝悶Ξ繝ｭ.png" },
            // 繧､繝吶Φ繝医・繝輔ぃ繝ｳ繧ｿ繧ｸ繝ｼ

            // 蜍慕黄繝ｻ繝倥Ν繝｡繝・ヨ繝ｻ縺昴・莉・
            { id: "bear_hat", label: "繧ｯ繝槫ｸｽ蟄・, value: "bear hat", imageSrc: "/images/hat/繧ｯ繝槫ｸｽ蟄・png" },
            { id: "dog_hat", label: "迥ｬ蟶ｽ蟄・, value: "dog hat", imageSrc: "/images/hat/迥ｬ蟶ｽ蟄・png" },
            { id: "fox_hat", label: "繧ｭ繝・ロ蟶ｽ蟄・, value: "fox hat", imageSrc: "/images/hat/繧ｭ繝・ロ蟶ｽ蟄・png" },
            { id: "penguin_hat", label: "繝壹Φ繧ｮ繝ｳ蟶ｽ蟄・, value: "penguin hat", imageSrc: "/images/hat/繝壹Φ繧ｮ繝ｳ蟶ｽ蟄・png" },
            { id: "rabbit_hat", label: "繧ｦ繧ｵ繧ｮ蟶ｽ蟄・, value: "rabbit hat", imageSrc: "/images/hat/縺・＆縺主ｸｽ蟄・jpg" },
            { id: "bicycle_helmet", label: "閾ｪ霆｢霆翫Γ繝・ヨ", value: "bicycle helmet", imageSrc: "/images/hat/閾ｪ霆｢霆翫・繝ｫ繝｡繝・ヨ.png" },
            { id: "football_helmet", label: "繧｢繝｡繝輔ヨ繝｡繝・ヨ", value: "football helmet", imageSrc: "/images/hat/繝輔ャ繝医・繝ｼ繝ｫ繝倥Ν繝｡繝・ヨ.png" },

            { id: "astronaut_helmet", label: "螳・ｮ咎｣幄｡悟｣ｫ", value: "astronaut helmet", imageSrc: "/images/hat/螳・ｮ咎｣幄｡悟｣ｫ繝倥Ν繝｡繝・ヨ.png" },
            { id: "hard_hat", label: "繝倥Ν繝｡繝・ヨ(菴懈･ｭ)", value: "hard hat", imageSrc: "/images/hat/蟾･莠狗畑繝倥Ν繝｡繝・ヨ.png" },
            { id: "horned_helmet", label: "隗剃ｻ倥″繝｡繝・ヨ", value: "horned helmet", imageSrc: "/images/hat/隗剃ｻ倥″繝倥Ν繝｡繝・ヨ.png" },
            { id: "headband", label: "繝倥ャ繝峨ヰ繝ｳ繝・, value: "headband", imageSrc: "/images/hat/繝倥ャ繝峨ヰ繝ｳ繝・png" },

            { id: "headscarf", label: "繝倥ャ繝峨せ繧ｫ繝ｼ繝・, value: "headscarf", imageSrc: "/images/hat/繝倥ャ繝峨せ繧ｫ繝ｼ繝・png" },
            { id: "bandana", label: "繝舌Φ繝繝・, value: "bandana", imageSrc: "/images/hat/繝舌Φ繝繝・png" },
            { id: "diadem", label: "繝・ぅ繧｢繝・Β", value: "diadem", imageSrc: "/images/hat/繝・ぅ繧｢繝・Β.png" },
            { id: "fascinator", label: "繝輔ぃ繧ｷ繝阪・繧ｿ繝ｼ", value: "fascinator", imageSrc: "/images/hat/繝輔ぃ繧ｷ繝阪・繧ｿ繝ｼ.png" },
        ],
    },
];
