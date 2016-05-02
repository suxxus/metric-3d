export default d3 => {
    return (inner = 0, outer = 0) => {
        var arc = d3.svg.arc();
        arc.innerRadius(inner)
            .outerRadius(outer);
        return arc;
    };
};
