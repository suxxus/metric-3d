export default d3 => {
    return data => {
        var pie = d3.layout.pie()
            .sort(null);
        return pie(data);
    };
};
