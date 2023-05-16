const truncateEthAddress = (address, length = 4) => {
    if (!address) return "";
    const truncateRegex = new RegExp(
        `^(0x[a-zA-Z0-9]{${length}})[a-zA-Z0-9]+([a-zA-Z0-9]{${length}})$`
    );
    const match = address.match(truncateRegex);
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
};

export default truncateEthAddress;
