import gulp from 'gulp';
import cheerio from 'gulp-cheerio';
import postcss from 'gulp-postcss';
import postcssUrl from 'postcss-url';

// 任務1: 移除 crossorigin 屬性
export const removeCrossorigin = () => {
    return gulp
        .src('dist/**/*.html')
        .pipe(
            cheerio({
                run: ($) => {
                    // 查找所有帶有 crossorigin 屬性的標籤，並移除該屬性
                    $('script[crossorigin], link[crossorigin]').removeAttr('crossorigin');
                },
                parserOptions: {
                    decodeEntities: false, // 保留原始字符編碼，避免轉換為 HTML 實體
                },
            })
        )
        .pipe(gulp.dest('dist'));
};

// 任務2: 修改CSS中的圖片相對路徑
export const modifyCssPath = () => {
    return gulp
        .src('dist/**/*.css')
        .pipe(
            postcss([
                postcssUrl({
                    url: (asset) => {
                        // 修改 CSS 中的圖片路徑
                        return asset.url.replace('assets/Image/', '../../assets/Image/');
                    },
                }),
            ])
        )
        .pipe(gulp.dest('dist'));
};

// 任務3: 修改HTML中的圖片相對路徑
export const modifyRelativePath = () => {
    return gulp
        .src('dist/**/*.html')
        .pipe(
            cheerio({
                run: ($) => {
                    $('script[src], link[href]').each((_, el) => {
                        const $el = $(el);
                        const attrName = $el.is('link') ? 'href' : 'src';
                        const originalPath = $el.attr(attrName);
                        let newPath = originalPath.replace('./assets/', '../assets/');
                        if (originalPath.startsWith('Plugin/')) {
                            newPath = originalPath.replace('Plugin/', '../Plugin/');
                        }
                        $el.attr(attrName, newPath);
                    });
                },
                parserOptions: { decodeEntities: false }, // 保留原始字符編碼
            })
        )
        .pipe(gulp.dest('dist'));
};

// 合併任務: 順序執行移除 crossorigin 和修改相對路徑
export default gulp.series(removeCrossorigin);
