function repeat (str, multipler) {
    if (multipler < 0)
    return "";
    if (multipler === 1)
    return str;
    else
    return str + repeat (str, multipler -1);
}

