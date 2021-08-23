export function SearchForm() {
    const $form = document.createElement("form"),
        $input = document.createElement("input");
    $form.classList.add("form-search");
    $input.name = "search";
    $input.type = "search";
    $input.placeholder = "Buscar...";
    $form.appendChild($input);
    return $form;
}
