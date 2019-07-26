export interface Select2 {
  $container: JQuery;
  $dropdown: JQuery;
  $selection: JQuery;
  $results: JQuery;
  dropdown: any;
  id: string;
  results: any;
  selection: any;
}

export interface Select2Plugin<TElement = HTMLElement> {
  defaults: {
    set: (key: string, value: any) => void;
    reset: () => void;
  };

  (): JQuery<TElement>;
  
  /**
   * Reverts changes to DOM done by Select2. Any selection done via Select2 will be preserved.
   */
  (method: "destroy"): JQuery<TElement>;
  /**
   * Opens the dropdown
   */
  (method: "open"): JQuery<TElement>;
  /**
   * Closes the dropdown
   */
  (method: "close"): JQuery<TElement>;
}

declare global {
  interface JQuery<TElement = HTMLElement> {
    select2: Select2Plugin<TElement>;
  }
}
