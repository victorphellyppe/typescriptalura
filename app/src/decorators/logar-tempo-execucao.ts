export function logarTempoExecucao(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(){
            const t1 = performance.now();

            // chamar o metodo original

            const t2 = performance.now();
            console.log(`${ propertyKey}, tempo de execução: ${(t2-t1)/1000}`);
            

        };
    }
}