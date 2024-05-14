"use strict"

class RenderFunction {
    #url
    #building
    #room
     constructor() {
        this.#url = new URL(window.location)
        this.#building = this.#chooseBuilding()
        this.#room = this.#building ? this.#url.searchParams.get(this.#building): undefined
        this.renderCabinet()
    }

    #chooseBuilding (){
        return this.#url.searchParams.get('high') ?'high' : this.#url.searchParams.get('primary') ? 'primary' : this.#url.searchParams.get('lab') ? 'lab' : undefined
    }

    renderCabinet() {
        document.querySelector('.cabinet').append(`Кабинет ${this.#room}`)
    }
}
const renderFunction = new RenderFunction()


