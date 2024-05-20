// Clase Nodo
class Nodo {
    constructor(estadoComun) {
        this.estadoComun = estadoComun; // Estado común a todos los nodos
        this.enlaces = []; // Lista de enlaces del nodo
    }

    // Método para añadir un enlace al nodo
    addEnlace(enlace) {
        this.enlaces.push(enlace);
    }

    // Método abstracto para obtener información geográfica
    // Debe ser implementado por las subclases
    funcInfoGeo() {
        throw new Error('Método funcInfoGeo() debe ser implementado en las subclases');
    }

    // Método para aceptar un visitante
    accept(visitor) {
        visitor.visitNode(this);
    }
}

// Subclase de Nodo: Ciudad
class Ciudad extends Nodo {
    constructor(estadoComun, estadoEspecifico) {
        super(estadoComun); // Llama al constructor de la clase base Nodo
        this.estadoEspecifico = estadoEspecifico; // Estado específico de la ciudad
    }

    // Implementación específica del método para obtener información geográfica
    funcInfoGeo() {
        // Implementación específica para Ciudad
    }
}

// Subclase de Nodo: Industria
class Industria extends Nodo {
    constructor(estadoComun, estadoEspecifico) {
        super(estadoComun); // Llama al constructor de la clase base Nodo
        this.estadoEspecifico = estadoEspecifico; // Estado específico de la industria
    }

    // Implementación específica del método para obtener información geográfica
    funcInfoGeo() {
        // Implementación específica para Industria
    }
}

// Subclase de Nodo: LugarTurismo
class LugarTurismo extends Nodo {
    constructor(estadoComun, estadoEspecifico) {
        super(estadoComun); // Llama al constructor de la clase base Nodo
        this.estadoEspecifico = estadoEspecifico; // Estado específico del lugar turístico
    }

    // Implementación específica del método para obtener información geográfica
    funcInfoGeo() {
        // Implementación específica para LugarTurismo
    }
}

// Clase Enlace
class Enlace {
    constructor(origen, destino) {
        this.origen = origen; // Nodo origen del enlace
        this.destino = destino; // Nodo destino del enlace
    }
}

// Clase Grafo
class Grafo {
    constructor() {
        this.nodos = []; // Lista de nodos en el grafo
    }

    // Método para añadir un nodo al grafo
    addNodo(nodo) {
        this.nodos.push(nodo);
    }

    // Método para exportar el grafo usando un visitante
    exportar(visitor) {
        this.nodos.forEach(nodo => nodo.accept(visitor));
    }
}

// Clase Visitor (visitante)
class Visitor {
    visitNode(nodo) {
        throw new Error('Método visitNode debe ser implementado en las subclases');
    }
}

// Subclase de Visitor: XMLExportVisitor
class XMLExportVisitor extends Visitor {
    visitNode(nodo) {
        if (nodo instanceof Ciudad) {
            // Lógica para exportar Ciudad a XML
            console.log(`Exportando Ciudad a XML: ${nodo.estadoEspecifico}`);
        } else if (nodo instanceof Industria) {
            // Lógica para exportar Industria a XML
            console.log(`Exportando Industria a XML: ${nodo.estadoEspecifico}`);
        } else if (nodo instanceof LugarTurismo) {
            // Lógica para exportar LugarTurismo a XML
            console.log(`Exportando LugarTurismo a XML: ${nodo.estadoEspecifico}`);
        }
    }
}

// Ejemplo de uso
const grafo = new Grafo();

const ciudad = new Ciudad('estadoComun', 'Madrid');
const industria = new Industria('estadoComun', 'Fábrica de Coches');
const lugarTurismo = new LugarTurismo('estadoComun', 'Museo del Prado');

const enlace1 = new Enlace(ciudad, industria);
const enlace2 = new Enlace(ciudad, lugarTurismo);

ciudad.addEnlace(enlace1); // Añade un enlace desde ciudad a industria
ciudad.addEnlace(enlace2); // Añade un enlace desde ciudad a lugar turístico

grafo.addNodo(ciudad); // Añade el nodo ciudad al grafo
grafo.addNodo(industria); // Añade el nodo industria al grafo
grafo.addNodo(lugarTurismo); // Añade el nodo lugar turístico al grafo

const xmlExportVisitor = new XMLExportVisitor();
grafo.exportar(xmlExportVisitor); // Exporta el grafo usando el visitante XML
