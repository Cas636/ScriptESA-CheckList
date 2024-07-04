import url from 'url';
import { createRunner } from '@puppeteer/replay';

export async function run(extension) {
    const runner = await createRunner(extension);

    await runner.runBeforeAllSteps();

    await runner.runStep({
        type: 'setViewport',
        width: 882,
        height: 712,
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: false
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(2) span.select2-selection__arrow',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[1]/td[2]/span/span[1]/span/span[2]',
            'pierce/tr.rowHover > td:nth-of-type(2) span.select2-selection__arrow'
        ],
        offsetX: 15.975677490234375,
        offsetY: 5.8992919921875
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 23.760406494140625,
        offsetY: 3.826385498046875
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(2) span.select2-selection__arrow',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[2]/td[2]/span/span[1]/span/span[2]',
            'pierce/tr.rowHover > td:nth-of-type(2) span.select2-selection__arrow'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(2) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[2]/td[2]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(2) b'
        ],
        offsetX: 2.968719482421875,
        offsetY: 0.9062347412109375
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 15.760406494140625,
        offsetY: 8.829849243164062
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(2) span.select2-selection__arrow',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[3]/td[2]/span/span[1]/span/span[2]',
            'pierce/tr.rowHover > td:nth-of-type(2) span.select2-selection__arrow'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(2) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[3]/td[2]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(2) b'
        ],
        offsetX: 4.968719482421875,
        offsetY: 1.9097137451171875
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 15.760406494140625,
        offsetY: 9.83331298828125
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(2) span.select2-selection__arrow',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[4]/td[2]/span/span[1]/span/span[2]',
            'pierce/tr.rowHover > td:nth-of-type(2) span.select2-selection__arrow'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(2) span.select2-selection__arrow',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[4]/td[2]/span/span[1]/span/span[2]',
            'pierce/tr.rowHover > td:nth-of-type(2) span.select2-selection__arrow'
        ],
        offsetX: 13.975677490234375,
        offsetY: 12.694427490234375
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 33.760406494140625,
        offsetY: 7.62152099609375
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(2) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[5]/td[2]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(2) b'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(2) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[5]/td[2]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(2) b'
        ],
        offsetX: 5.968719482421875,
        offsetY: 0.46875
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 37.760406494140625,
        offsetY: 9.374969482421875
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(2) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[6]/td[2]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(2) b'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(2) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[6]/td[2]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(2) b'
        ],
        offsetX: 3.968719482421875,
        offsetY: 1.472198486328125
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 29.760406494140625,
        offsetY: 9.39581298828125
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(2) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[7]/td[2]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(2) b'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(2) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[7]/td[2]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(2) b'
        ],
        offsetX: 0.968719482421875,
        offsetY: 2.475677490234375
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 18.760406494140625,
        offsetY: 9.3992919921875
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(2) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[8]/td[2]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(2) b'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(2) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[8]/td[2]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(2) b'
        ],
        offsetX: -1.031280517578125,
        offsetY: 0.479156494140625
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 23.760406494140625,
        offsetY: 7.385406494140625
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(2) span.select2-selection__arrow',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[9]/td[2]/span/span[1]/span/span[2]',
            'pierce/tr.rowHover > td:nth-of-type(2) span.select2-selection__arrow'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(2) span.select2-selection__arrow',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[9]/td[2]/span/span[1]/span/span[2]',
            'pierce/tr.rowHover > td:nth-of-type(2) span.select2-selection__arrow'
        ],
        offsetX: 1.975677490234375,
        offsetY: 7.479156494140625
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        timeout: 5000,
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 28.760406494140625,
        offsetY: 8.38885498046875
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[1]/td[4]/span/span[1]/span/span[2]',
            'pierce/tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[1]/td[4]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(4) b'
        ],
        offsetX: 2.1839599609375,
        offsetY: 3.125
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 44.97564697265625,
        offsetY: 12.048599243164062
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[2]/td[4]/span/span[1]/span/span[2]',
            'pierce/tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[2]/td[4]/span/span[1]/span/span[2]',
            'pierce/tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow'
        ],
        offsetX: 3.19091796875,
        offsetY: 8.124984741210938
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 23.97564697265625,
        offsetY: 12.829849243164062
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[3]/td[4]/span/span[1]/span/span[2]',
            'pierce/tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[3]/td[4]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(4) b'
        ],
        offsetX: 2.1839599609375,
        offsetY: 1.9097137451171875
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 39.97564697265625,
        offsetY: 9.83331298828125
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[4]/td[4]/span/span[1]/span/span[2]',
            'pierce/tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[4]/td[4]/span/span[1]/span/span[2]',
            'pierce/tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow'
        ],
        offsetX: 4.19091796875,
        offsetY: 11.694427490234375
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 33.97564697265625,
        offsetY: 11.84375
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[5]/td[4]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(4) b'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[5]/td[4]/span/span[1]/span/span[2]',
            'pierce/tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow'
        ],
        offsetX: 12.19091796875,
        offsetY: 11.6875
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 20.97564697265625,
        offsetY: 4.374969482421875
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[6]/td[4]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(4) b'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[6]/td[4]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(4) b'
        ],
        offsetX: 6.1839599609375,
        offsetY: 3.472198486328125
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 31.97564697265625,
        offsetY: 12.39581298828125
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[7]/td[4]/span/span[1]/span/span[2]',
            'pierce/tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[7]/td[4]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(4) b'
        ],
        offsetX: 2.1839599609375,
        offsetY: -0.524322509765625
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 30.97564697265625,
        offsetY: 8.3992919921875
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[8]/td[4]/span/span[1]/span/span[2]',
            'pierce/tr.rowHover > td:nth-of-type(4) span.select2-selection__arrow'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[8]/td[4]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(4) b'
        ],
        offsetX: -0.8160400390625,
        offsetY: 1.479156494140625
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 28.97564697265625,
        offsetY: 11.385406494140625
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[9]/td[4]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(4) b'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'tr.rowHover > td:nth-of-type(4) b',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[9]/td[4]/span/span[1]/span/span[2]/b',
            'pierce/tr.rowHover > td:nth-of-type(4) b'
        ],
        offsetX: 2.1839599609375,
        offsetY: -0.51739501953125
    });
    await runner.runStep({
        type: 'waitForElement',
        timeout: 5000,
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Si[role="option"]'
        ],
        offsetX: 39.97564697265625,
        offsetY: 8.38885498046875
    });
    await runner.runStep({
        type: 'waitForElement',
        target: 'main',
        selectors: [
            'aria/Guardar[role="button"]',
            'table input',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[10]/td/input',
            'pierce/table input',
            'text/Guardar'
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            'aria/Guardar[role="button"]',
            'table input',
            'xpath///*[@id="ui-id-31"]/form/table/tbody/tr[10]/td/input',
            'pierce/table input',
            'text/Guardar'
        ],
        offsetX: 43.222198486328125,
        offsetY: 7.58331298828125
    });

    await runner.runAfterAllSteps();
}

if (process && import.meta.url === url.pathToFileURL(process.argv[1]).href) {
    run()
}
