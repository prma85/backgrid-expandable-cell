# Expandable Backgrid Cell

[![Greenkeeper badge](https://badges.greenkeeper.io/prma85/backgrid-expandable-cell.svg)](https://greenkeeper.io/)

Backgrid.js expandable cell extension to create accordions on demand (when clicked in the target element)

For use, you just need to import and put it in your first column as a cell type. Then, you will need to define the funtion `renderSubItems` as a column attribute. This function will be responsible to generate the subitems that you will show when the line in the grid is explandabled.

# Example

```
import ExpandableCell from './expandable-cell';

/* your other imports */

const collection = /* your Bacbone collection */;

const columns = [
  {
    cell: ExpandableCell,
    renderSubItems: function(collection, model) {
                const items = collection
                    .filter(items => items.get('ID').indexOf(model.get('ID')) === 0)
                    .map(item => {
                        return {
                            firstTD: '',
                            secondTD: item.get('myPropriety1'),
                            thirdTD: item.get('myPropriety2')
                        };
                    });
                return items;
            }
  },
  /* other Backgrid.js columns here */
];`

var grid = new Backgrid.Grid({
  columns: columns,
  collection: collection,
  className: 'table table-striped table-bordered table-hover'
});
```
