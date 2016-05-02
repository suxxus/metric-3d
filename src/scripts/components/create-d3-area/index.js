export default d3 => {

    return ({ data, width, height }) => {
        const x = d3.scale.linear()
            .domain([1, d3.max(data, d => d.x)])
            .range([1, width]),

            y = d3.scale.linear()
            .domain([0, d3.max(data, d => d.y)])
            .range([height, 0]),

            area = d3.svg.area()
            .x(d => x(d.x))
            .y0(height)
            .y1(d => y(d.y));

        return area;
    };
};
