export type OptionItem = {
    id: string;
    label: string;
    value: string; // プロンプトに使用する英語
    imageSrc?: string; // 表示用画像のパス
    description?: string;
};

export type Category = {
    id: string;
    label: string;
    items: OptionItem[];
};

// 共通のランダム項目定義
const randomOption: OptionItem = {
    id: "random",
    label: "ランダム",
    value: "random",
    imageSrc: "/images/random.png",
    description: "おまかせ"
};

export const categories: Category[] = [
    {
        id: "race",
        label: "種族",
        items: [
            randomOption,
            { id: "human", label: "人間", value: "human", imageSrc: "/images/race/human.png", description: "標準的な人間" },
            { id: "elf", label: "エルフ", value: "elf, pointed ears", imageSrc: "/images/race/elf.png", description: "尖った耳を持つ長命種" },
            { id: "beast", label: "獣人", value: "beastkin, animal ears, tail", imageSrc: "/images/race/beast.png", description: "動物の特徴を持つ種族" },
            { id: "angel", label: "天使", value: "angel, halo, wings", imageSrc: "/images/race/angel.png", description: "背中に翼を持つ神聖な存在" },
            { id: "demon", label: "悪魔", value: "demon, horns, bat wings", imageSrc: "/images/race/demon.png", description: "角と翼を持つ闇の住人" },
            { id: "cyborg", label: "サイボーグ", value: "cyborg, mechanical parts", imageSrc: "/images/race/cyborg.png", description: "機械化された身体" },
        ],
    },
    {
        id: "gender",
        label: "性別",
        items: [
            randomOption,
            { id: "female", label: "女性", value: "girl, female", imageSrc: "https://placehold.co/400x400/png?text=Female", description: "" },
            { id: "male", label: "男性", value: "boy, male", imageSrc: "https://placehold.co/400x400/png?text=Male", description: "" },
            { id: "androgynous", label: "中性", value: "androgynous", imageSrc: "https://placehold.co/400x400/png?text=Other", description: "" },
        ],
    },
    {
        id: "body",
        label: "体格",
        items: [
            randomOption,
            { id: "slender", label: "スレンダー", value: "slender body", imageSrc: "https://placehold.co/400x400/png?text=Slender", description: "細身の体型" },
            { id: "athletic", label: "筋肉質", value: "athletic body, muscular", imageSrc: "https://placehold.co/400x400/png?text=Athletic", description: "引き締まった体型" },
            { id: "chubby", label: "ぽっちゃり", value: "chubby body, plump", imageSrc: "https://placehold.co/400x400/png?text=Chubby", description: "柔らかそうな体型" },
            { id: "child", label: "子供", value: "child body, small stature", imageSrc: "https://placehold.co/400x400/png?text=Child", description: "小柄な体型" },
        ],
    },
    {
        id: "eyes_shape",
        label: "目の形",
        items: [
            randomOption,
            { id: "tsurime", label: "つり目", value: "tsurime, sharp eyes", imageSrc: "https://placehold.co/400x400/png?text=Sharp", description: "キリッとした目" },
            { id: "tareme", label: "たれ目", value: "tareme, droopy eyes", imageSrc: "https://placehold.co/400x400/png?text=Droopy", description: "優しそうな目" },
            { id: "jitome", label: "ジト目", value: "half-closed eyes", imageSrc: "https://placehold.co/400x400/png?text=Jitome", description: "半開きの気だるげな目" },
            { id: "round", label: "丸目", value: "round eyes, big eyes", imageSrc: "https://placehold.co/400x400/png?text=Round", description: "ぱっちりした丸い目" },
        ],
    },
    {
        id: "eyes_color",
        label: "瞳の色",
        items: [
            randomOption,
            { id: "red", label: "赤", value: "red eyes", imageSrc: "https://placehold.co/400x400/ff0000/ffffff/png?text=Red" },
            { id: "blue", label: "青", value: "blue eyes", imageSrc: "https://placehold.co/400x400/0000ff/ffffff/png?text=Blue" },
            { id: "green", label: "緑", value: "green eyes", imageSrc: "https://placehold.co/400x400/008000/ffffff/png?text=Green" },
            { id: "yellow", label: "黄", value: "yellow eyes", imageSrc: "https://placehold.co/400x400/ffff00/000000/png?text=Yellow" },
            { id: "purple", label: "紫", value: "purple eyes", imageSrc: "https://placehold.co/400x400/800080/ffffff/png?text=Purple" },
            { id: "heterochromia", label: "オッドアイ", value: "heterochromia", imageSrc: "https://placehold.co/400x400/png?text=Odd" },
        ],
    },
    {
        id: "hair_style",
        label: "髪型",
        items: [
            randomOption,
            { id: "long", label: "ロング", value: "long hair", imageSrc: "https://placehold.co/400x400/png?text=Long" },
            { id: "short", label: "ショート", value: "short hair", imageSrc: "https://placehold.co/400x400/png?text=Short" },
            { id: "twintails", label: "ツインテール", value: "twintails", imageSrc: "https://placehold.co/400x400/png?text=Twin" },
            { id: "ponytail", label: "ポニーテール", value: "ponytail", imageSrc: "https://placehold.co/400x400/png?text=Pony" },
            { id: "bob", label: "ボブ", value: "bob cut", imageSrc: "https://placehold.co/400x400/png?text=Bob" },
            { id: "braid", label: "おさげ", value: "braid", imageSrc: "https://placehold.co/400x400/png?text=Braid" },
        ],
    },
    {
        id: "hair_color",
        label: "髪の色",
        items: [
            randomOption,
            { id: "black", label: "黒", value: "black hair", imageSrc: "https://placehold.co/400x400/000000/ffffff/png?text=Black" },
            { id: "blonde", label: "金", value: "blonde hair", imageSrc: "https://placehold.co/400x400/ffd700/000000/png?text=Gold" },
            { id: "silver", label: "銀", value: "silver hair", imageSrc: "https://placehold.co/400x400/c0c0c0/000000/png?text=Silver" },
            { id: "red_hair", label: "赤", value: "red hair", imageSrc: "https://placehold.co/400x400/ff0000/ffffff/png?text=Red" },
            { id: "blue_hair", label: "青", value: "blue hair", imageSrc: "https://placehold.co/400x400/0000ff/ffffff/png?text=Blue" },
            { id: "pink", label: "ピンク", value: "pink hair", imageSrc: "https://placehold.co/400x400/ffc0cb/000000/png?text=Pink" },
            { id: "white", label: "白", value: "white hair", imageSrc: "https://placehold.co/400x400/ffffff/000000/png?text=White" },
        ],
    },
    {
        id: "clothing",
        label: "衣装",
        items: [
            randomOption,
            { id: "school_uniform", label: "制服", value: "school uniform", imageSrc: "https://placehold.co/400x400/png?text=Uniform" },
            { id: "casual", label: "私服", value: "casual clothes, t-shirt, jeans", imageSrc: "https://placehold.co/400x400/png?text=Casual" },
            { id: "fantasy", label: "ファンタジー", value: "fantasy armor, robe", imageSrc: "https://placehold.co/400x400/png?text=Fantasy" },
            { id: "maid", label: "メイド服", value: "maid apron, dress", imageSrc: "https://placehold.co/400x400/png?text=Maid" },
            { id: "suit", label: "スーツ", value: "formal suit", imageSrc: "https://placehold.co/400x400/png?text=Suit" },
            { id: "kimono", label: "着物", value: "kimono, japanese clothes", imageSrc: "https://placehold.co/400x400/png?text=Kimono" },
            { id: "sport", label: "スポーツウェア", value: "sportswear, jersey", imageSrc: "https://placehold.co/400x400/png?text=Sport" },
        ],
    },
    {
        id: "accessories",
        label: "装飾",
        items: [
            randomOption,
            { id: "none", label: "なし", value: "", imageSrc: "https://placehold.co/400x400/png?text=None" },
            { id: "glasses", label: "メガネ", value: "glasses", imageSrc: "https://placehold.co/400x400/png?text=Glasses" },
            { id: "hat", label: "帽子", value: "hat, cap", imageSrc: "https://placehold.co/400x400/png?text=Hat" },
            { id: "ribbon", label: "リボン", value: "hair ribbon", imageSrc: "https://placehold.co/400x400/png?text=Ribbon" },
            { id: "headphones", label: "ヘッドホン", value: "headphones", imageSrc: "https://placehold.co/400x400/png?text=Headphones" },
            { id: "scarf", label: "マフラー", value: "scarf", imageSrc: "https://placehold.co/400x400/png?text=Scarf" },
        ],
    },
    {
        id: "expression",
        label: "表情",
        items: [
            randomOption,
            { id: "smile", label: "笑顔", value: "smile, happy", imageSrc: "https://placehold.co/400x400/png?text=Smile" },
            { id: "angry", label: "怒り", value: "angry, annoyed", imageSrc: "https://placehold.co/400x400/png?text=Angry" },
            { id: "sad", label: "悲しい", value: "sad, crying", imageSrc: "https://placehold.co/400x400/png?text=Sad" },
            { id: "shy", label: "照れ", value: "blush, shy", imageSrc: "https://placehold.co/400x400/png?text=Shy" },
            { id: "surprised", label: "驚き", value: "surprised, open mouth", imageSrc: "https://placehold.co/400x400/png?text=Surprised" },
            { id: "serious", label: "真剣", value: "serious face", imageSrc: "https://placehold.co/400x400/png?text=Serious" },
        ],
    },
    {
        id: "situation",
        label: "シチュエーション",
        items: [
            randomOption,
            { id: "studio", label: "スタジオ", value: "simple background, white background", imageSrc: "https://placehold.co/400x400/png?text=Studio" },
            { id: "fantasy_forest", label: "森", value: "fantasy forest, nature, trees", imageSrc: "https://placehold.co/400x400/png?text=Forest" },
            { id: "cyber_city", label: "サイバーシティ", value: "cyberpunk city, neon lights", imageSrc: "https://placehold.co/400x400/png?text=Cyber" },
            { id: "classroom", label: "教室", value: "classroom, school desk", imageSrc: "https://placehold.co/400x400/png?text=Class" },
            { id: "cafe", label: "カフェ", value: "cafe, indoor, coffee", imageSrc: "https://placehold.co/400x400/png?text=Cafe" },
            { id: "sky", label: "青空", value: "blue sky, clouds, day", imageSrc: "https://placehold.co/400x400/png?text=Sky" },
        ],
    },
    {
        id: "hat",
        label: "帽子・頭部装飾",
        items: [
            randomOption,
            // カジュアル
            { id: "baseball_cap", label: "野球帽", value: "baseball cap", imageSrc: "https://placehold.co/400x400/png?text=Cap" },
            { id: "beanie", label: "ビーニー", value: "beanie", imageSrc: "https://placehold.co/400x400/png?text=Beanie" },
            { id: "bucket_hat", label: "バケットハット", value: "bucket hat", imageSrc: "https://placehold.co/400x400/png?text=Bucket" },
            { id: "flat_cap", label: "ハンチング", value: "flat cap", imageSrc: "https://placehold.co/400x400/png?text=FlatCap" },
            { id: "sun_hat", label: "つば広帽", value: "sun hat", imageSrc: "https://placehold.co/400x400/png?text=SunHat" },
            { id: "straw_hat", label: "麦わら帽子", value: "straw hat", imageSrc: "https://placehold.co/400x400/png?text=Straw" },
            { id: "beret", label: "ベレー帽", value: "beret", imageSrc: "https://placehold.co/400x400/png?text=Beret" },
            { id: "boater_hat", label: "カンカン帽", value: "boater hat", imageSrc: "https://placehold.co/400x400/png?text=Boater" },
            { id: "bowler_hat", label: "山高帽", value: "bowler hat", imageSrc: "https://placehold.co/400x400/png?text=Bowler" },
            { id: "bonnet", label: "ボンネット", value: "bonnet", imageSrc: "https://placehold.co/400x400/png?text=Bonnet" },
            { id: "cabbie_hat", label: "キャビーハット", value: "cabbie hat", imageSrc: "https://placehold.co/400x400/png?text=Cabbie" },
            { id: "deerstalker", label: "鹿撃ち帽", value: "deerstalker", imageSrc: "https://placehold.co/400x400/png?text=Deer" },
            { id: "fedora", label: "中折れ帽", value: "fedora", imageSrc: "https://placehold.co/400x400/png?text=Fedora" },
            { id: "top_hat", label: "シルクハット", value: "top hat", imageSrc: "https://placehold.co/400x400/png?text=TopHat" },
            // 職業・イベント・その他
            { id: "military_hat", label: "軍帽", value: "military hat", imageSrc: "https://placehold.co/400x400/png?text=Military" },
            { id: "police_hat", label: "警官帽", value: "police hat", imageSrc: "https://placehold.co/400x400/png?text=Police" },
            { id: "nurse_cap", label: "ナースキャップ", value: "nurse cap", imageSrc: "https://placehold.co/400x400/png?text=Nurse" },
            { id: "chef_hat", label: "コック帽", value: "chef hat", imageSrc: "https://placehold.co/400x400/png?text=Chef" },
            { id: "school_hat", label: "学生帽", value: "school hat", imageSrc: "https://placehold.co/400x400/png?text=School" },
            { id: "mortarboard", label: "角帽", value: "mortarboard", imageSrc: "https://placehold.co/400x400/png?text=Mortar" },
            { id: "sailor_hat", label: "セーラーハット", value: "sailor hat", imageSrc: "https://placehold.co/400x400/png?text=Sailor" },
            { id: "cowboy_hat", label: "カウボーイ", value: "cowboy hat", imageSrc: "https://placehold.co/400x400/png?text=Cowboy" },
            { id: "pirate_hat", label: "海賊帽", value: "pirate hat", imageSrc: "https://placehold.co/400x400/png?text=Pirate" },
            { id: "witch_hat", label: "魔女の帽子", value: "witch hat", imageSrc: "https://placehold.co/400x400/png?text=Witch" },
            { id: "cat_hat", label: "猫耳帽子", value: "cat hat", imageSrc: "https://placehold.co/400x400/png?text=CatHat" },
            { id: "helmet", label: "ヘルメット", value: "helmet", imageSrc: "https://placehold.co/400x400/png?text=Helmet" },
            { id: "crown", label: "王冠", value: "crown", imageSrc: "https://placehold.co/400x400/png?text=Crown" },
            { id: "tiara", label: "ティアラ", value: "tiara", imageSrc: "https://placehold.co/400x400/png?text=Tiara" },
            { id: "maid_headdress", label: "メイドブリム", value: "maid headdress", imageSrc: "https://placehold.co/400x400/png?text=Maid" },
            { id: "hair_ribbon", label: "リボン", value: "hair ribbon", imageSrc: "https://placehold.co/400x400/png?text=Ribbon" },
            { id: "papakha", label: "パパーハ", value: "papakha", imageSrc: "https://placehold.co/400x400/png?text=Papakha" },
            { id: "ushanka", label: "ウシャンカ", value: "ushanka", imageSrc: "https://placehold.co/400x400/png?text=Ushanka" },
            { id: "turban", label: "ターバン", value: "turban", imageSrc: "https://placehold.co/400x400/png?text=Turban" },
            { id: "fox_mask", label: "狐面", value: "fox mask on head", imageSrc: "https://placehold.co/400x400/png?text=FoxMask" },
        ],
    },
];
