import randomstring from 'randomstring';
import createArea from 'scripts/components/create-d3-area';
import createPie from 'scripts/components/create-d3-pie';
import createArc from 'scripts/components/create-d3-arc';

export default d3 => {
    return props => {

        const {
            container,
            width,
            height,
            annual,
            title,
            subtitle,
            values,
            classnames,
            inner,
            outer
        } = props,

            CreateArea = createArea(d3),
            CreatePie = createPie(d3),
            CreateArc = createArc(d3),
            clipPathÌd = randomstring.generate(5),

            svg = d3.select(container)
            .attr('class', 'metric')
            .attr('width', width)
            .attr('height', height);

        // clip path
        svg.append('clipPath')
            .attr('id', clipPathÌd)
            .append('circle')
            .attr('cx', 88)
            .attr('cy', 88)
            .attr('r', 74);

        // crosshair
        const crossHair = svg.append('g')
            .attr('class', 'cross-hair');

        crossHair.append('polyline')
            .attr('class', 'cross')
            .attr('points', '5,87, 170,87');
        crossHair.append('polyline')
            .attr('class', 'cross')
            .attr('points', '87,5, 87,170');

        // circle mask
        svg.append('circle')
            .style('fill', '#FFF')
            .style('stroke', 'none')
            .attr('cx', 88)
            .attr('cy', 88)
            .attr('r', 74);

        // area
        svg.append('g')
            .attr('clip-path', `url(#${clipPathÌd})`)
            .append('path')
            .attr('transform', 'translate(0,100)')
            .datum(annual)
            .attr('class', 'area')
            .attr('d', CreateArea({
                data: annual,
                width: 155,
                height: 80
            }));

        // text
        svg.append('text')
            .attr('class', 'metric-text metric-info-title')
            .attr('x', 88)
            .attr('y', 69)
            .text(title);
        svg.append('text')
            .attr('class', 'metric-text metric-info-value')
            .attr('x', 88)
            .attr('y', 95)
            .text(subtitle);

        // pie
        svg.append('g')
            .attr('class', 'pie')
            .attr('transform', 'translate(88,88)rotate(180)')
            .selectAll('path')
            .data(CreatePie(values))
            .enter().append('path')
            .attr('class', (d, i) => classnames[i])
            .attr('d', CreateArc(inner, outer));

        return svg;
    };
};
