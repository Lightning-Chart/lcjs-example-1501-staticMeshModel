/*
 * Static 3D Mesh Model
 */

const lcjs = require('@lightningchart/lcjs')

const { lightningChart, Themes } = lcjs

const chart3D = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
    .Chart3D({
        legend: { visible: false },
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
    })
    .setTitle('Asteroid 3D Model')

fetch(new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'examples/assets/1501/asteroid.obj')
    .then((response) => response.text())
    .then((data) => {
        console.log(data, 'data')
        const meshModel = chart3D.addMeshModel().setScale(0.2).setModelRotationEuler({ x: 45, y: 0, z: 0 }).setModelFromObj(data)
    })
