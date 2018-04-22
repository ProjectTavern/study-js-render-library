const data = {
    "name": "Anais"
};

// Actually, this link() is JSViews Function.
// One more, link() seems like originated from jQuery Data-link function. - Maybe BorisMoore.
export const binder = $.templates("#theTmpl").link("#result", data);

