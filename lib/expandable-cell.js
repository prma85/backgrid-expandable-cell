/*!
 * Backgrid Expandable Cell
 * https://github.com/prma85/backgrid-expandable-cell
 *
 * Copyright 2018 Paulo Andrade
 * Released under the MIT license
 */

import Backbone from 'backbone';
import Backgrid from 'backbone.backgrid';

const SubStates = {
    Collapsed: 'collapsed',
    Expanded: 'expanded'
};

export default class ExpandableCell extends Backgrid.StringCell {
    get icon() {
        const link = $('<a>', {
            class: 'btn btn-link state'
        });

        if (this.state === SubStates.Expanded) {
            link.html(
                $('<i>', {
                    class: 'fa fa-2x fa-caret-down m-r-2'
                })
            );
        } else {
            link.html(
                $('<i>', {
                    class: 'fa fa-2x fa-caret-right m-r-2'
                })
            );
        }

        link.append(this.model.get(this.column.get('name')));

        return link;
    }

    initialize(options) {
        super.initialize(options);
        this.subItems = this.column.get('renderSubItems')(this.column.get('collection'), this.model);
        this.state = 'collapsed';

        // This immediately triggers expand action once the view is ready.

        if (options.initialState === SubStates.Expanded) {
            window.requestAnimationFrame(() => this.expand());
        }
    }

    events() {
        return {
            'click a.state': 'stateConverter'
        };
    }

    render() {
        this.$el.empty();
        if (this.column.get('name') && this.subItems.length > 0) {
            this.$el.append(this.icon);
        }

        return this;
    }

    expand() {
        this.state = SubStates.Collapsed;
        this.stateConverter();
    }

    collapse() {
        this.state = SubStates.Expanded;
        this.stateConverter();
    }

    stateConverter(e) {
        if (e) {
            e.preventDefault();
        }
        this.$el.empty();
        if (this.state === SubStates.Collapsed) {
            this.state = SubStates.Expanded;
            this.subRows = [];
            this.subItems.forEach(item => {
                let subrow = new SubRow({ item: item });
                this.subRows.add(subrow);
                const render = subrow.render().$el;
                $(this.el)
                    .parent('tr')
                    .after(render);
            });
        } else {
            this.state = SubStates.Collapsed;
            this.remove();
        }
        this.$el.append(this.icon);
    }
    remove() {
        if (this.subRows && this.subRows.length > 0) {
            this.subRows.forEach(subRow => {
                subRow.remove();
            });
            this.subRows = [];
        }
    }
}

export class SubRow extends Backbone.View {
    get tagName() {
        return 'tr';
    }

    get className() {
        return 'renderable';
    }

    initialize(options) {
        super.initialize(options);
        this.item = options.item;
    }

    render() {
        this.$el.empty();

        Object.keys(this.item).forEach(key => {
            let newView = new SubRowItemView({ value: this.item[key] });
            const render = newView.render().$el;
            $(this.el).append(render);
        });

        return this;
    }
}

export class SubRowItemView extends Backbone.View {
    get tagName() {
        return 'td';
    }

    get className() {
        return 'string-cell';
    }

    initialize(options) {
        super.initialize(options);
        this.value = options.value;
    }

    render() {
        this.$el.empty();

        this.$el.html(this.value);
        return this;
    }
}
