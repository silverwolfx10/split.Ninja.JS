/**
 * $split
 * 
 * Divide um literal em um array de literais, separando a string em substrings
 * a funcao curry
 * 
 * @module $split
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 * 
 *        $split('hello cleber.programmer', ' ');
 * 
 */
this.Ninja.module('$split', ['$curry'], function ($curry) {

  /**
   * Divide um literal em um array de literais, separando a string em substrings
   * 
   * @public
   * @method $split
   * @param {String} a Lietra que sera dividito
   * @param {Stirng|RegExp} b Separado do literal
   * @param {Number} c Delimitador do tamanho do array
   * @return {Array} Array com seus valores
   * @example
   * 
   *        $split('hello cleber.programmer', ' ');
   * 
   */
  function split(a, b, c) {
    return a.split(b);
  }

  /**
   * Revelacao do modulo $split, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(split);
  
});
