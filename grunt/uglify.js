module.exports = {
    app: {
        options: {
            sourceMap: '<%= target %>/scripts/calendar.min.map.js'
        },
        src: '<%= concat.release.dest %>',
        dest: '<%= target %>/scripts/calendar.min.js'
    }
};