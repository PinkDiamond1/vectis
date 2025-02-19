const common = {
    admin: {
        mnemonic:
            "clip hire initial neck maid actor venue client foam budget lock catalog sweet steak waste crater broccoli pipe steak sister coyote moment obvious choose",
        address: "juno16g2rahf5846rxzp3fwlswy08fz8ccuwk03k57y",
    },
    user: {
        mnemonic:
            "useful guitar throw awesome later damage film tonight escape burger powder manage exact start title december impulse random similar eager smart absurd unaware enlist",
        address: "juno1tcxyhajlzvdheqyackfzqcmmfcr760malxrvqr",
    },
    guardian_1: {
        mnemonic:
            "slim rely one tiny chapter job toilet vague moment inquiry abandon toe robust trust orchard oyster elephant jazz quantum shaft stairs polar drop gospel",
        address: "juno1qwwx8hsrhge9ptg4skrmux35zgna47pwnhz5t4",
    },
    guardian_2: {
        mnemonic:
            "prepare tired ten whisper receive spider heavy differ mom web champion clever brass sight furnace cash march rice use nature ginger portion area million",
        address: "juno1wk2r0jrhuskqmhc0gk6dcpmnz094sc2aq7w9p6",
    },
    relayer_1: {
        mnemonic:
            "regret blur gas upon blossom illness exercise lamp combine monster draw inquiry borrow scrub achieve credit country donate stool develop kid amount flush wall",
        address: "juno1ucl9dulgww2trng0dmunj348vxneufu50c822z",
    },
    relayer_2: {
        mnemonic:
            "material often similar patrol please flat van toast agree milk grass pause glow rhythm voyage reason potato sunset great govern pave decade critic lens",
        address: "juno1yjammmgqu62lz4sxk5seu7ml4fzdu7gkp967q0",
    },
    committee1: {
        mnemonic:
            "cave topple history exercise carpet crash answer correct one benefit fury tiger medal emerge canoe acquire pig chuckle mystery confirm alley security exit mixture",
        address: "juno1dfd5vtxy2ty5gqqv0cs2z23pfucnpym9kcq8vv",
    },
    committee2: {
        mnemonic:
            "divorce park goat subject cake arrive liar reward favorite shed market spot harsh garden wet general enlist limb chair message current grant curtain that",
        address: "juno1ndxfpxzxg267ujpc6wwhw9fs2rvgfh06z6zs25",
    },
    token_holder: {
        mnemonic: "deputy undo immense because brave capital analyst use affair grit shrug unlock",
        address: "juno1wy2n9yv5r67hfdzzjcc9fw38pk88xtwr26dz6x",
    },
};

export const juno_mainnet = {
    ...common,
    admin: {
        mnemonic: process.env.JUNO_ADMIN_MNEMONIC,
        address: process.env.JUNO_ADMIN_ADDRESS,
    },
    committee1: {
        mnemonic: process.env.JUNO_COMMITTEE1_MNEMONIC,
        address: process.env.JUNO_COMMITTEE1_ADDRESS,
    },
    committee2: {
        mnemonic: process.env.JUNO_COMMITTEE2_MNEMONIC,
        address: process.env.JUNO_COMMITTEE2_ADDRESS,
    },
};
export const juno_testnet = { ...common };
export const juno_localnet = { ...common };
