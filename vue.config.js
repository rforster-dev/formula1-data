// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    pages: {
      index: {
        // entry for the page
        entry: 'src/pages/Home/main.js',
        // the source template
        template: 'public/index.html',
        // output as dist/index.html
        filename: 'index.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Index Page',
        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      lastseasonofdriver: {
        // entry for the page
        entry: 'src/pages/LastSeasonOfDriver/main.js',
        // the source template
        template: 'public/index.html',
        // output as dist/index.html
        filename: 'driver-results.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Driver result of previous season',
        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        chunks: ['chunk-vendors', 'chunk-common', 'lastseasonofdriver']
      },
      alldrivers: {
        // entry for the page
        entry: 'src/pages/AllDrivers/main.js',
        // the source template
        template: 'public/index.html',
        // output as dist/index.html
        filename: 'all-drivers.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Driver result of previous season',
        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        chunks: ['chunk-vendors', 'chunk-common', 'alldrivers']
      },
      lastseasonchampionship: {
        // entry for the page
        entry: 'src/pages/ChampionshipStanding/main.js',
        // the source template
        template: 'public/index.html',
        // output as dist/index.html
        filename: 'championship-standings.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Final result of 2021 championship',
        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        chunks: ['chunk-vendors', 'chunk-common', 'lastseasonchampionship']
      },
      seasonlist: {
        // entry for the page
        entry: 'src/pages/SeasonList/main.js',
        // the source template
        template: 'public/index.html',
        // output as dist/index.html
        filename: 'season-list.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Season list',
        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        chunks: ['chunk-vendors', 'chunk-common', 'seasonlist']
      },
     
     
    }
  }