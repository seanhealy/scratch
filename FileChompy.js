// 👹 FileChompy v0.1.0

const FileChompy = {
	folderPageSize: 60,
	jsonPrefixLength: 8,
	css: `
			#FileChompyContainer {
				font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
				position: absolute;
				inset: 0;
				z-index: 9999;
				background-color: #fff;
				overflow: hidden;
				display: flex;
				flex-direction: column;
			}

			#FileChompyContainer h1 {
				margin: 0;
				padding: 1rem;
				font-size: 1.5rem;
				font-weight: 600;
				color: #212529;
				background-color: #f8f9fa;
				border-bottom: 1px solid #e9ecef;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				position: sticky;
				top: 0;
				z-index: 10;
			}

			#FileChompyContainer h1 small {
				font-size: 0.7em;
				color: #6c757d;
				display: block;
				font-weight: 400;
			}

			#FileChompyContainer .main-content {
				display: flex;
				flex: 1;
				overflow: hidden;
			}

			#FileChompyContainer .assets-section {
				flex: 1;
				overflow: auto;
			}

			#FileChompyContainer ul {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				padding: 1rem;
				margin: 0;
				list-style: none;
			}

			#FileChompyContainer .handles-sidebar {
				width: 350px;
				background-color: #f8f9fa;
				border-left: 1px solid #e9ecef;
				display: flex;
				flex-direction: column;
				overflow: hidden;
			}

			#FileChompyContainer .handles-sidebar h2 {
				margin: 0;
				padding: 1rem;
				font-size: 1rem;
				font-weight: 600;
				color: #212529;
				background-color: #e9ecef;
				border-bottom: 1px solid #dee2e6;
				text-align: center;
			}

			#FileChompyContainer .handles-list {
				flex: 1;
				overflow-y: auto;
				padding: 0;
			}

			#FileChompyContainer .handles-search {
				padding: 0.75rem;
				border-bottom: 1px solid #dee2e6;
			}

			#FileChompyContainer .handles-search input {
				width: 100%;
				padding: 0.5rem;
				border: 1px solid #ced4da;
				border-radius: 4px;
				font-size: 14px;
				box-sizing: border-box;
			}

			#FileChompyContainer .handles-search input:focus {
				outline: none;
				border-color: #007cba;
				box-shadow: 0 0 0 2px rgba(0, 124, 186, 0.1);
			}

			#FileChompyContainer .handle-item {
				padding: 0.5rem 0.75rem;
				border-bottom: 1px solid #e9ecef;
				font-size: 12px;
				color: #495057;
				cursor: pointer;
				word-break: break-word;
				transition: background-color 0.2s ease;
			}

			#FileChompyContainer .handle-item:hover {
				background-color: #e2e6ea;
			}

			#FileChompyContainer .handle-item:last-child {
				border-bottom: none;
			}

			#FileChompyContainer .handle-item.highlighted {
				background-color: #fff3cd;
				border-left: 3px solid #ffc107;
			}

			#FileChompyContainer li {
				display: flex;
				align-items: center;
				gap: 1rem;
				padding: 1rem;
				background-color: #f8f9fa;
				border-radius: 8px;
				border: 1px solid #e9ecef;
				transition: box-shadow 0.2s ease;
			}

			#FileChompyContainer img {
				border-radius: 4px;
				box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
			}

			#FileChompyContainer .form-container {
				flex: 1;
			}

			#FileChompyContainer form {
				display: flex;
				align-items: center;
				gap: 0.75rem;
			}

			#FileChompyContainer input[name="assetName"] {
				flex: 1;
				padding: 0.5rem 0.75rem;
				border: 1px solid #ced4da;
				border-radius: 6px;
				font-size: 14px;
				transition: border-color 0.2s ease, box-shadow 0.2s ease;
			}

			#FileChompyContainer input[name="assetName"]:focus {
				outline: none;
				border-color: #007cba;
				box-shadow: 0 0 0 3px rgba(0, 124, 186, 0.1);
			}

			#FileChompyContainer button {
				padding: 0.5rem 1rem;
				background: #007cba;
				color: white;
				border: none;
				border-radius: 6px;
				cursor: pointer;
				font-size: 14px;
				font-weight: 500;
				white-space: nowrap;
				transition: background-color 0.2s ease;
			}

			#FileChompyContainer button:hover:not(:disabled) {
				background-color: #0056b3;
			}

			#FileChompyContainer button:disabled {
				cursor: not-allowed;
				opacity: 0.7;
			}

			#FileChompyContainer button.success {
				background-color: #28a745 !important;
			}

			#FileChompyContainer button.error {
				background-color: #dc3545 !important;
			}

			#FileChompyContainer li.invalid-asset {
				background-color: #ffe6e6;
				border-color: #ffb3b3;
			}

			#FileChompyContainer li.valid-asset {
				background-color: #e6ffe6;
				border-color: #b3ffb3;
			}

			#FileChompyContainer .matches-display {
				margin-top: 0.5rem;
				font-size: 12px;
				color: #6c757d;
				display: flex;
				align-items: center;
				gap: 0.5rem;
			}

			#FileChompyContainer .matches-pills {
				display: flex;
				flex-wrap: wrap;
				gap: 0.25rem;
			}

			#FileChompyContainer .matches-pill {
				background-color: #e9ecef;
				color: #495057;
				padding: 0.25rem 0.5rem;
				border-radius: 12px;
				font-size: 11px;
				border: 1px solid #ced4da;
			}

			#FileChompyContainer .matches-pill.no-matches {
				background-color: #f8d7da;
				color: #721c24;
				border-color: #f5c6cb;
			}

			#FileChompyContainer .bulk-operations {
				background-color: #f8f9fa;
				border-bottom: 1px solid #e9ecef;
				padding: 1rem;
				font-size: 1.1rem;
			}

			#FileChompyContainer .bulk-operations h2 {
				margin: 0 0 1rem 0;
				font-size: 1.4rem;
				color: #495057;
			}

			#FileChompyContainer .bulk-form {
				display: flex;
				gap: 1rem;
				align-items: end;
				flex-wrap: wrap;
			}

			#FileChompyContainer .bulk-input-group {
				display: flex;
				flex-direction: column;
				gap: 0.25rem;
				min-width: 150px;
			}

			#FileChompyContainer .bulk-input-group label {
				font-size: 1.1rem;
				font-weight: 500;
				color: #495057;
			}

			#FileChompyContainer .bulk-input-group input {
				padding: 0.75rem;
				border: 1px solid #ced4da;
				border-radius: 4px;
				font-size: 1.2rem;
			}

			#FileChompyContainer .bulk-actions {
				display: flex;
				gap: 0.5rem;
			}

			#FileChompyContainer .bulk-preview {
				margin-top: 1rem;
				max-height: 200px;
				overflow-y: auto;
				border: 1px solid #e9ecef;
				border-radius: 4px;
				background-color: #fff;
			}

			#FileChompyContainer .bulk-preview-item {
				padding: 0.75rem;
				border-bottom: 1px solid #f1f3f4;
				font-size: 1rem;
			}

			#FileChompyContainer .bulk-preview-item:last-child {
				border-bottom: none;
			}

			#FileChompyContainer .bulk-preview-item .before {
				color: #dc3545;
			}

			#FileChompyContainer .bulk-preview-item .after {
				color: #28a745;
				font-weight: 500;
			}

			#FileChompyContainer .bulk-progress {
				margin-top: 1rem;
				padding: 0.75rem;
				background-color: #e9ecef;
				border-radius: 4px;
				font-size: 1.1rem;
				display: none;
			}

			#FileChompyContainer .bulk-progress.active {
				display: block;
			}

			#FileChompyContainer h1 {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			#FileChompyContainer .toggle-bulk-button {
				background-color: #007bff;
				color: white;
				border: none;
				border-radius: 4px;
				padding: 0.25rem 0.75rem;
				font-size: 0.8rem;
				cursor: pointer;
				transition: background-color 0.2s;
			}

			#FileChompyContainer .toggle-bulk-button:hover {
				background-color: #0056b3;
			}

			#FileChompyContainer .toggle-bulk-button:active {
				background-color: #004085;
			}
		`,
	validHandles: [
		"2-2-bath-bundle-2-soft-rib-bath-towel-resort-stripe-hand-towel",
		"2-2-bath-bundle-3-classic-white-bath-towel-mosaic-moss-hand-towel",
		"2-2-classic-turkish-cotton-bath-bundle-bone",
		"2-2-classic-turkish-cotton-bath-bundle-dusk",
		"2-2-classic-turkish-cotton-bath-bundle-spa",
		"2-2-classic-turkish-cotton-bath-bundle-white",
		"2-2-mix-match-bath-bundle-4-ladder-stripe-toast-bath-towel-classic-bone-hand-towel",
		"2-2-organic-bath-bundle-organic-mosaic-multi-bath-towel-organic-plush-sage-hand-towel",
		"2-2-organic-ladder-stripe-bath-bundle-moss-and-dusk",
		"2-2-organic-ladder-stripe-bath-bundle-toast-and-natural",
		"2-2-organic-ladder-stripe-bath-bundle-tobacco-and-cream",
		"2-2-organic-mosaic-bath-bundle-ash-and-toast",
		"2-2-organic-mosaic-bath-bundle-moss-and-dusk",
		"2-2-organic-mosaic-bath-bundle-multi",
		"2-2-organic-mosaic-bath-bundle-ochre-and-clay",
		"2-2-organic-plush-bath-bundle-adobe",
		"2-2-organic-plush-bath-bundle-bone",
		"2-2-organic-plush-bath-bundle-sage",
		"2-2-organic-plush-bath-bundle-white",
		"2-2-organic-resort-stripe-bath-bundle-adobe-with-butter",
		"2-2-organic-resort-stripe-bath-bundle-camel-with-soft-black",
		"2-2-organic-resort-stripe-bath-bundle-moss-with-java",
		"2-2-organic-resort-stripe-bath-bundle-plaster-with-soft-black",
		"2-2-organic-resort-stripe-bath-bundle-sage-with-russet",
		"2-2-soft-rib-bath-bundle-bone",
		"2-2-soft-rib-bath-bundle-dark-grey",
		"2-2-soft-rib-bath-bundle-dusk",
		"2-2-soft-rib-bath-bundle-lagoon",
		"2-2-soft-rib-bath-bundle-moss",
		"2-2-soft-rib-bath-bundle-sage",
		"2-2-soft-rib-bath-bundle-white",
		"2-2-waffle-bath-bundle-bone",
		"2-2-waffle-bath-bundle-charcoal",
		"2-2-waffle-bath-bundle-evergreen",
		"2-2-waffle-bath-bundle-white",
		"4-4-bath-bundle-2-soft-rib-bath-towel-resort-stripe-hand-towel",
		"4-4-bath-bundle-3-classic-white-bath-towel-mosaic-moss-hand-towel",
		"4-4-classic-turkish-cotton-bath-bundle-bone",
		"4-4-classic-turkish-cotton-bath-bundle-dusk",
		"4-4-classic-turkish-cotton-bath-bundle-spa",
		"4-4-classic-turkish-cotton-bath-bundle-white",
		"4-4-mix-match-bath-bundle-4-ladder-stripe-toast-bath-towel-classic-bone-hand-towel",
		"4-4-organic-bath-bundle-organic-mosaic-multi-bath-towel-organic-plush-sage-hand-towel",
		"4-4-organic-ladder-stripe-bath-bundle-moss-and-dusk",
		"4-4-organic-ladder-stripe-bath-bundle-toast-and-natural",
		"4-4-organic-ladder-stripe-bath-bundle-tobacco-and-cream",
		"4-4-organic-mosaic-bath-bundle-ash-and-toast",
		"4-4-organic-mosaic-bath-bundle-moss-and-dusk",
		"4-4-organic-mosaic-bath-bundle-multi",
		"4-4-organic-mosaic-bath-bundle-ochre-and-clay",
		"4-4-organic-plush-bath-bundle-adobe",
		"4-4-organic-plush-bath-bundle-bone",
		"4-4-organic-plush-bath-bundle-sage",
		"4-4-organic-plush-bath-bundle-white",
		"4-4-organic-resort-stripe-bath-bundle-adobe-with-butter",
		"4-4-organic-resort-stripe-bath-bundle-camel-with-soft-black",
		"4-4-organic-resort-stripe-bath-bundle-moss-with-java",
		"4-4-organic-resort-stripe-bath-bundle-plaster-with-soft-black",
		"4-4-organic-resort-stripe-bath-bundle-sage-with-russet",
		"4-4-soft-rib-bath-bundle-bone",
		"4-4-soft-rib-bath-bundle-dark-grey",
		"4-4-soft-rib-bath-bundle-dusk",
		"4-4-soft-rib-bath-bundle-lagoon",
		"4-4-soft-rib-bath-bundle-moss",
		"4-4-soft-rib-bath-bundle-sage",
		"4-4-soft-rib-bath-bundle-white",
		"4-4-waffle-bath-bundle-bone",
		"4-4-waffle-bath-bundle-charcoal",
		"4-4-waffle-bath-bundle-evergreen",
		"4-4-waffle-bath-bundle-white",
		"6-6-bath-bundle-2-soft-rib-bath-towel-resort-stripe-hand-towel",
		"6-6-bath-bundle-3-classic-white-bath-towel-mosaic-moss-hand-towel",
		"6-6-classic-turkish-cotton-bath-bundle-bone",
		"6-6-classic-turkish-cotton-bath-bundle-dusk",
		"6-6-classic-turkish-cotton-bath-bundle-spa",
		"6-6-classic-turkish-cotton-bath-bundle-white",
		"6-6-mix-match-bath-bundle-4-ladder-stripe-toast-bath-towel-classic-bone-hand-towel",
		"6-6-organic-bath-bundle-organic-mosaic-multi-bath-towel-organic-plush-sage-hand-towel",
		"6-6-organic-ladder-stripe-bath-bundle-moss-and-dusk",
		"6-6-organic-ladder-stripe-bath-bundle-toast-and-natural",
		"6-6-organic-ladder-stripe-bath-bundle-tobacco-and-cream",
		"6-6-organic-mosaic-bath-bundle-ash-and-toast",
		"6-6-organic-mosaic-bath-bundle-moss-and-dusk",
		"6-6-organic-mosaic-bath-bundle-multi",
		"6-6-organic-mosaic-bath-bundle-ochre-and-clay",
		"6-6-organic-plush-bath-bundle-adobe",
		"6-6-organic-plush-bath-bundle-bone",
		"6-6-organic-plush-bath-bundle-sage",
		"6-6-organic-plush-bath-bundle-white",
		"6-6-organic-resort-stripe-bath-bundle-adobe-with-butter",
		"6-6-organic-resort-stripe-bath-bundle-camel-with-soft-black",
		"6-6-organic-resort-stripe-bath-bundle-moss-with-java",
		"6-6-organic-resort-stripe-bath-bundle-plaster-with-soft-black",
		"6-6-organic-resort-stripe-bath-bundle-sage-with-russet",
		"6-6-soft-rib-bath-bundle-bone",
		"6-6-soft-rib-bath-bundle-dark-grey",
		"6-6-soft-rib-bath-bundle-dusk",
		"6-6-soft-rib-bath-bundle-lagoon",
		"6-6-soft-rib-bath-bundle-moss",
		"6-6-soft-rib-bath-bundle-sage",
		"6-6-soft-rib-bath-bundle-white",
		"6-6-waffle-bath-bundle-bone",
		"6-6-waffle-bath-bundle-charcoal",
		"6-6-waffle-bath-bundle-evergreen",
		"6-6-waffle-bath-bundle-white",
		"alpaca-boucle-throw-cream",
		"alpaca-boucle-throw-mist",
		"alpaca-boucle-windowpane-throw-cream-with-tobacco",
		"alpaca-boucle-windowpane-throw-natural-with-onyx",
		"anti-aging-body-balm",
		"basketweave-merino-pillow-cover-natural",
		"basketweave-merino-throw-natural",
		"bathtub-caddy",
		"birch-coverlet",
		"birch-sham-set",
		"birkenstock-zermatt-premium-shearling-mink",
		"birkenstock-zermatt-premium-shearling-thyme",
		"black-and-gold-serving-set",
		"bluff-stacked-nightstand-with-drawer",
		"body-pillow-insert-down-alternative",
		"botanical-hand-sanitizer",
		"boucle-body-pillow-cover-cream",
		"boucle-lumbar-pillow-cover-cream",
		"boucle-pillow-cover-cream",
		"boucle-pillow-cover-java",
		"braided-hand-knit-rug-stone",
		"braided-hand-knit-rug-white",
		"brushed-cotton-bundle-bone-f-q-1",
		"brushed-cotton-bundle-bone-k-ck-1",
		"brushed-cotton-bundle-dusk-f-q-1",
		"brushed-cotton-bundle-dusk-k-ck-1",
		"brushed-cotton-bundle-evergreen-f-q-1",
		"brushed-cotton-bundle-evergreen-k-ck-1",
		"brushed-cotton-bundle-moss-f-q-1",
		"brushed-cotton-bundle-moss-k-ck-1",
		"brushed-cotton-bundle-white-f-q-1",
		"brushed-cotton-bundle-white-k-ck-1",
		"brushed-cotton-duvet-cover-ash",
		"brushed-cotton-duvet-cover-bone",
		"brushed-cotton-duvet-cover-dusk",
		"brushed-cotton-duvet-cover-evergreen",
		"brushed-cotton-duvet-cover-moss",
		"brushed-cotton-duvet-cover-set-bone-f-q",
		"brushed-cotton-duvet-cover-set-bone-k-ck",
		"brushed-cotton-duvet-cover-set-dusk-f-q",
		"brushed-cotton-duvet-cover-set-dusk-k-ck",
		"brushed-cotton-duvet-cover-set-evergreen-f-q",
		"brushed-cotton-duvet-cover-set-evergreen-k-ck",
		"brushed-cotton-duvet-cover-set-moss-f-q",
		"brushed-cotton-duvet-cover-set-moss-k-ck",
		"brushed-cotton-duvet-cover-set-white-f-q",
		"brushed-cotton-duvet-cover-set-white-k-ck",
		"brushed-cotton-duvet-cover-white",
		"brushed-cotton-euro-sham-ash",
		"brushed-cotton-euro-sham-bone",
		"brushed-cotton-euro-sham-dusk",
		"brushed-cotton-euro-sham-evergreen",
		"brushed-cotton-euro-sham-grey",
		"brushed-cotton-euro-sham-grey-and-coal",
		"brushed-cotton-euro-sham-mist",
		"brushed-cotton-euro-sham-moss",
		"brushed-cotton-euro-sham-surplus-and-ivory",
		"brushed-cotton-euro-sham-white",
		"brushed-cotton-fabric-swatch-ash",
		"brushed-cotton-fabric-swatch-bone",
		"brushed-cotton-fabric-swatch-clover",
		"brushed-cotton-fabric-swatch-dusk",
		"brushed-cotton-fabric-swatch-evergreen",
		"brushed-cotton-fabric-swatch-ivory",
		"brushed-cotton-fabric-swatch-moss",
		"brushed-cotton-fabric-swatch-white",
		"brushed-cotton-fitted-sheet-ash",
		"brushed-cotton-fitted-sheet-bone",
		"brushed-cotton-fitted-sheet-dusk",
		"brushed-cotton-fitted-sheet-everygreen",
		"brushed-cotton-fitted-sheet-moss",
		"brushed-cotton-fitted-sheet-white",
		"brushed-cotton-pillowcase-set-ash",
		"brushed-cotton-pillowcase-set-bone",
		"brushed-cotton-pillowcase-set-dusk",
		"brushed-cotton-pillowcase-set-evergreen",
		"brushed-cotton-pillowcase-set-moss",
		"brushed-cotton-pillowcase-set-white",
		"brushed-cotton-sham-set-ash",
		"brushed-cotton-sham-set-bone-1",
		"brushed-cotton-sham-set-dusk-1",
		"brushed-cotton-sham-set-evergreen-1",
		"brushed-cotton-sham-set-mist",
		"brushed-cotton-sham-set-moss-1",
		"brushed-cotton-sham-set-white-1",
		"brushed-cotton-sheet-set-bone-f-q",
		"brushed-cotton-sheet-set-bone-k-ck",
		"brushed-cotton-sheet-set-dusk-f-q",
		"brushed-cotton-sheet-set-dusk-k-ck",
		"brushed-cotton-sheet-set-evergreen-f-q",
		"brushed-cotton-sheet-set-evergreen-k-ck",
		"brushed-cotton-sheet-set-moss-f-q",
		"brushed-cotton-sheet-set-moss-k-ck",
		"brushed-cotton-sheet-set-white-f-q",
		"brushed-cotton-sheet-set-white-k-ck",
		"brushed-cotton-top-sheet-ash",
		"brushed-cotton-top-sheet-bone",
		"brushed-cotton-top-sheet-clover",
		"brushed-cotton-top-sheet-dusk",
		"brushed-cotton-top-sheet-evergreen",
		"brushed-cotton-top-sheet-ivory",
		"brushed-cotton-top-sheet-moss",
		"brushed-cotton-top-sheet-white",
		"brushed-cotton-venice-set-bone-f-q",
		"brushed-cotton-venice-set-bone-k-ck",
		"brushed-cotton-venice-set-dusk-f-q",
		"brushed-cotton-venice-set-dusk-k-ck",
		"brushed-cotton-venice-set-evergreen-f-q",
		"brushed-cotton-venice-set-evergreen-k-ck",
		"brushed-cotton-venice-set-moss-f-q",
		"brushed-cotton-venice-set-moss-k-ck",
		"brushed-cotton-venice-set-white-f-q",
		"brushed-cotton-venice-set-white-k-ck",
		"calm-shower-mist",
		"canopy-recycled-glass-highball-set",
		"canopy-recycled-glass-water-carafe",
		"cashmere-baby-blanket-dusty-rose",
		"cashmere-baby-blanket-grey",
		"cashmere-baby-blanket-ivory",
		"cashmere-baby-blanket-sage",
		"cashmere-baby-hat-grey",
		"cashmere-baby-hat-ivory",
		"cashmere-baby-hat-sage",
		"century-floor-lamp",
		"century-table-lamp",
		"ceramic-mug",
		"ceramic-oval-platter-1",
		"checkered-bath-rug",
		"checkered-gauze-duvet-cover-set",
		"chunky-alpaca-throw",
		"classic-flange-pillow-cover",
		"classic-flange-pillow-cover-ecru",
		"classic-flange-pillow-cover-soft-black",
		"classic-knit-alpaca-throw-charcoal",
		"classic-knit-alpaca-throw-light-heather-grey",
		"classic-turkish-cotton-robe-blush",
		"classic-turkish-cotton-robe-bone",
		"classic-turkish-cotton-robe-dusk",
		"classic-turkish-cotton-robe-mineral",
		"classic-turkish-cotton-robe-moss",
		"classic-turkish-cotton-robe-stone",
		"classic-turkish-cotton-robe-white",
		"classic-turkish-cotton-slippers-bone-new",
		"classic-turkish-cotton-slippers-dusk-new",
		"classic-turkish-cotton-slippers-white-new",
		"classic-turkish-cotton-towels-bone",
		"classic-turkish-cotton-towels-coal-1",
		"classic-turkish-cotton-towels-dusk",
		"classic-turkish-cotton-towels-spa",
		"classic-turkish-cotton-towels-white",
		"classic-turkish-cotton-tub-mat-bone",
		"classic-turkish-cotton-tub-mat-dusk",
		"classic-turkish-cotton-tub-mat-spa",
		"classic-turkish-cotton-tub-mat-white",
		"cloud-cotton-bath-wrap-bone",
		"cloud-cotton-bath-wrap-evergreen",
		"cloud-cotton-duvet-cover-set-1",
		"cloud-cotton-duvet-cover-set-white",
		"cloud-cotton-robe-bone",
		"cloud-cotton-robe-clover",
		"cloud-cotton-robe-dusk",
		"cloud-cotton-robe-evergreen",
		"cloud-cotton-robe-grey",
		"cloud-cotton-robe-java",
		"cloud-cotton-robe-lagoon",
		"cloud-cotton-robe-moss",
		"cloud-cotton-robe-rose",
		"cloud-cotton-toddler-sham",
		"cloud-linen-gauze-throw-bone",
		"cloud-linen-gauze-throw-coal",
		"cloud-linen-gauze-throw-cover",
		"cloud-linen-gauze-throw-mist",
		"cloud-linen-gauze-throw-moss",
		"cloud-linen-puff-lumbar-pillow-cover-bone",
		"cloud-linen-puff-lumbar-pillow-cover-moss",
		"cloud-linen-puff-lumbar-pillow-cover-soft-black",
		"confetti-crib-sheet",
		"cotton-canvas-underbed-storage",
		"coupe-dinnerware",
		"cozy-alpaca-throw-kelp",
		"cozy-alpaca-throw-natural",
		"cozy-alpaca-throw-soft-black",
		"cozy-bootie",
		"cozy-knit-robe-coal",
		"cozy-knit-robe-moss",
		"cozy-knit-robe-natural",
		"cozy-knit-robe-olive",
		"custom-linen-bundle-15-off",
		"custom-percale-bundle",
		"dawn-floor-lamp",
		"dawn-table-lamp",
		"decorative-pillow-insert",
		"desert-coverlet-adobe",
		"desert-coverlet-bone",
		"desert-lumbar-pillow-cover-ivory",
		"desert-lumbar-pillow-cover-natural",
		"desert-pillow-cover-ivory",
		"desert-pillow-cover-natural",
		"desert-sham-set-adobe",
		"desert-sham-set-bone",
		"digital-gift-card",
		"dotted-gauze-sham-set",
		"down-alternative-bolster-pillow-insert",
		"down-alternative-decorative-pillow-insert",
		"down-alternative-duvet",
		"down-alternative-euro-pillow",
		"down-alternative-lumbar-pillow-insert",
		"down-alternative-mattress-pad",
		"down-alternative-mini-lumbar-pillow-insert",
		"down-alternative-pillow",
		"down-alternative-side-sleeper-pillow",
		"down-alternative-starter-bundle",
		"down-decorative-lumbar-pillow-insert",
		"down-duvet",
		"down-mattress-pad",
		"down-pillow",
		"down-side-sleeper-pillow",
		"down-starter-bundle",
		"duvet-protector",
		"energize-shower-mist",
		"essential-cotton-euro-sham-bone",
		"essential-cotton-euro-sham-sage",
		"essential-cotton-quilt-bone",
		"essential-cotton-quilt-sage",
		"essential-cotton-sham-set-bone",
		"essential-cotton-sham-set-sage",
		"essential-oil-diffuser-terracotta",
		"essential-oil-diffuser-white-stone",
		"essentials-kit",
		"etched-duvet-cover-set",
		"everyday-linen-euro-sham-1",
		"everyday-linen-quilt-1",
		"everyday-quilted-tote",
		"feather-bed-with-down-top",
		"feather-euro-pillow-copy",
		"fiber-bed-with-down-alternative",
		"fiery-matchstick-holder",
		"flannel-fitted-sheet-bone",
		"flannel-fitted-sheet-thyme",
		"flannel-pillowcase-set-bone",
		"flannel-pillowcase-set-thyme",
		"flannel-quilt-bone",
		"flannel-quilt-thyme",
		"flannel-quilted-shams-bone",
		"flannel-quilted-shams-thyme",
		"flannel-top-sheet-bone",
		"flannel-top-sheet-thyme",
		"fouta-kitchen-towels",
		"fouta-kitchen-towels-1",
		"fringe-wool-pillow-cover-canyon",
		"fringe-wool-pillow-cover-ecru",
		"geo-stitch-duvet-cover-set",
		"grid-cotton-wool-coverlet-moss",
		"grid-cotton-wool-shams-moss",
		"grid-gauze-pillow-cover",
		"hand-stitched-bolster-pillow-cover-cream-and-tobacco",
		"hand-stitched-cotton-body-pillow-cover-ash",
		"hand-stitched-cotton-body-pillow-cover-cream",
		"hand-stitched-cotton-body-pillow-cover-dusk",
		"hand-stitched-cotton-euro-sham-ash",
		"hand-stitched-cotton-euro-sham-cream",
		"hand-stitched-cotton-euro-sham-dusk",
		"hand-stitched-cotton-quilt-ash",
		"hand-stitched-cotton-quilt-cream",
		"hand-stitched-cotton-quilt-dusk",
		"hand-stitched-cotton-shams-ash",
		"hand-stitched-cotton-shams-cream",
		"hand-stitched-cotton-shams-dusk",
		"hand-stitched-euro-pillow-cover-ivory-and-soft-black",
		"hand-stitched-velvet-body-pillow-cover-dusk",
		"hand-stitched-velvet-body-pillow-cover-tobacco",
		"hand-stitched-velvet-quilt-dusk",
		"hand-stitched-velvet-quilt-tobacco",
		"hand-stitched-velvet-quilted-sham-set-dusk",
		"hand-stitched-velvet-quilted-sham-set-tobacco",
		"heirloom-tencel-linen-bundle-bone-f-q",
		"heirloom-tencel-linen-bundle-bone-k-ck",
		"heirloom-tencel-linen-bundle-sage-f-q",
		"heirloom-tencel-linen-bundle-sage-k-ck",
		"heirloom-tencel-linen-bundle-warm-grey-f-q",
		"heirloom-tencel-linen-bundle-warm-grey-k-ck",
		"heirloom-tencel-linen-bundle-white-f-q-1",
		"heirloom-tencel-linen-bundle-white-k-ck-1",
		"heirloom-tencel-linen-duvet-cover-bone",
		"heirloom-tencel-linen-duvet-cover-clover",
		"heirloom-tencel-linen-duvet-cover-copy",
		"heirloom-tencel-linen-duvet-cover-sage",
		"heirloom-tencel-linen-duvet-cover-set-bone-f-q",
		"heirloom-tencel-linen-duvet-cover-set-bone-k-ck",
		"heirloom-tencel-linen-duvet-cover-set-sage-f-q",
		"heirloom-tencel-linen-duvet-cover-set-sage-k-ck",
		"heirloom-tencel-linen-duvet-cover-set-warm-grey-f-q",
		"heirloom-tencel-linen-duvet-cover-set-warm-grey-k-ck",
		"heirloom-tencel-linen-duvet-cover-set-white-f-q",
		"heirloom-tencel-linen-duvet-cover-set-white-k-ck",
		"heirloom-tencel-linen-duvet-cover-white",
		"heirloom-tencel-linen-euro-sham-bone",
		"heirloom-tencel-linen-euro-sham-clover",
		"heirloom-tencel-linen-euro-sham-sage",
		"heirloom-tencel-linen-euro-sham-warm-grey",
		"heirloom-tencel-linen-euro-sham-white",
		"heirloom-tencel-linen-fitted-sheet-bone",
		"heirloom-tencel-linen-fitted-sheet-clover",
		"heirloom-tencel-linen-fitted-sheet-sage",
		"heirloom-tencel-linen-fitted-sheet-warm-grey",
		"heirloom-tencel-linen-fitted-sheet-white",
		"heirloom-tencel-linen-pillowcase-set-bone",
		"heirloom-tencel-linen-pillowcase-set-clover",
		"heirloom-tencel-linen-pillowcase-set-sage",
		"heirloom-tencel-linen-pillowcase-set-warm-grey",
		"heirloom-tencel-linen-pillowcase-set-white",
		"heirloom-tencel-linen-sham-set-bone",
		"heirloom-tencel-linen-sham-set-clover",
		"heirloom-tencel-linen-sham-set-sage",
		"heirloom-tencel-linen-sham-set-warm-grey",
		"heirloom-tencel-linen-sham-set-white",
		"heirloom-tencel-linen-sheet-set-bone-f-q",
		"heirloom-tencel-linen-sheet-set-bone-k-ck",
		"heirloom-tencel-linen-sheet-set-sage-f-q",
		"heirloom-tencel-linen-sheet-set-sage-k-ck",
		"heirloom-tencel-linen-sheet-set-warm-grey-f-q",
		"heirloom-tencel-linen-sheet-set-warm-grey-k-ck",
		"heirloom-tencel-linen-sheet-set-white-f-q",
		"heirloom-tencel-linen-sheet-set-white-k-ck",
		"heirloom-tencel-linen-top-sheet-bone",
		"heirloom-tencel-linen-top-sheet-clover",
		"heirloom-tencel-linen-top-sheet-sage",
		"heirloom-tencel-linen-top-sheet-warm-grey",
		"heirloom-tencel-linen-top-sheet-white",
		"heirloom-tencel-linen-venice-set-bone-f-q",
		"heirloom-tencel-linen-venice-set-bone-k-ck",
		"heirloom-tencel-linen-venice-set-sage-f-q",
		"heirloom-tencel-linen-venice-set-sage-k-ck",
		"heirloom-tencel-linen-venice-set-warm-grey-f-q",
		"heirloom-tencel-linen-venice-set-warm-grey-k-ck",
		"heirloom-tencel-linen-venice-set-white-f-q",
		"heirloom-tencel-linen-venice-set-white-k-ck",
		"heritage-linen-bed-cover-natural-stripe-cool",
		"heritage-linen-bed-cover-natural-stripe-warm",
		"heritage-linen-body-pillow-cover-natural-stripe-cool",
		"heritage-linen-body-pillow-cover-natural-stripe-warm",
		"highland-wool-throw-brick",
		"highland-wool-throw-natural",
		"hippo-mom",
		"honeycomb-duvet-cover-set-soft-black-and-natural",
		"honeycomb-duvet-cover-set-soft-black-and-natural-k-ck",
		"honeycomb-duvet-cover-soft-black-and-natural",
		"honeycomb-sham-set-soft-black-and-natural",
		"hooded-light-terry-robe-bone",
		"lattice-cotton-duvet-cover-bone",
		"lattice-cotton-duvet-cover-cream",
		"lattice-cotton-sham-set-bone",
		"lattice-cotton-sham-set-cream",
		"lattice-duvet-cover-natural",
		"lattice-sham-set-natural",
		"le-fleur-alpaca-fringe-throw-geneva-blue",
		"le-fleur-camo-linen-pillowcase-set-blonde",
		"le-fleur-camo-linen-pillowcase-set-geneva-blue",
		"le-fleur-camo-linen-pillowcase-set-jade",
		"le-fleur-camo-linen-top-sheet-blonde",
		"le-fleur-camo-linen-top-sheet-geneva-blue",
		"le-fleur-camo-linen-top-sheet-jade",
		"le-fleur-linen-sham-set-blonde",
		"le-fleur-linen-sham-set-geneva-blue",
		"le-fleur-linen-sham-set-jade",
		"le-fleur-shearling-sphere-pillow-geneva-blue",
		"leather-cord-keeper",
		"linen-box-quilt-agave",
		"linen-box-quilt-bone",
		"linen-box-quilt-coal",
		"linen-box-quilt-dusk",
		"linen-box-quilt-evergreen",
		"linen-box-quilt-fabric-swatch-bone-1",
		"linen-box-quilt-fabric-swatch-clay",
		"linen-box-quilt-fabric-swatch-coal",
		"linen-box-quilt-fabric-swatch-dusk",
		"linen-box-quilt-fabric-swatch-fog",
		"linen-box-quilt-fabric-swatch-ochre",
		"linen-box-quilt-fabric-swatch-surplus",
		"linen-box-quilt-fog",
		"linen-box-quilt-haze",
		"linen-box-quilt-khaki",
		"linen-box-quilt-moss",
		"linen-box-quilt-white",
		"linen-box-quilted-euro-sham-agave",
		"linen-box-quilted-euro-sham-bone",
		"linen-box-quilted-euro-sham-coal",
		"linen-box-quilted-euro-sham-dusk",
		"linen-box-quilted-euro-sham-evergreen",
		"linen-box-quilted-euro-sham-fog",
		"linen-box-quilted-euro-sham-moss",
		"linen-box-quilted-euro-sham-whitw",
		"linen-box-quilted-sham-set-agave",
		"linen-box-quilted-sham-set-bone",
		"linen-box-quilted-sham-set-coal",
		"linen-box-quilted-sham-set-copy",
		"linen-box-quilted-sham-set-dusk-1",
		"linen-box-quilted-sham-set-evergreen",
		"linen-box-quilted-sham-set-moss",
		"linen-box-quilted-sham-set-white",
		"linen-bundle-bone-f-q",
		"linen-bundle-bone-k-ck",
		"linen-bundle-coal-f-q",
		"linen-bundle-coal-k-ck",
		"linen-bundle-cobalt-f-q",
		"linen-bundle-cobalt-k-ck",
		"linen-bundle-dusk-f-q",
		"linen-bundle-dusk-k-ck",
		"linen-bundle-evergreen-f-q",
		"linen-bundle-evergreen-k-ck",
		"linen-bundle-fog-f-q",
		"linen-bundle-fog-k-ck",
		"linen-bundle-honey-f-q",
		"linen-bundle-honey-k-ck",
		"linen-bundle-java-f-q",
		"linen-bundle-java-k-ck",
		"linen-bundle-marigold-f-q",
		"linen-bundle-marigold-k-ck",
		"linen-bundle-moss-f-q",
		"linen-bundle-moss-k-ck",
		"linen-bundle-peacock-f-q",
		"linen-bundle-peacock-k-ck",
		"linen-bundle-toast-f-q",
		"linen-bundle-toast-k-ck",
		"linen-bundle-tobacco-f-q-1",
		"linen-bundle-tobacco-k-ck",
		"linen-bundle-white-f-q",
		"linen-bundle-white-k-ck",
		"linen-duvet-cover-bone",
		"linen-duvet-cover-coal",
		"linen-duvet-cover-cobalt",
		"linen-duvet-cover-dusk",
		"linen-duvet-cover-evergreen",
		"linen-duvet-cover-fog",
		"linen-duvet-cover-honey",
		"linen-duvet-cover-java",
		"linen-duvet-cover-marigold",
		"linen-duvet-cover-moss",
		"linen-duvet-cover-peacock",
		"linen-duvet-cover-set-bone-f-q",
		"linen-duvet-cover-set-bone-k-ck",
		"linen-duvet-cover-set-coal-f-q",
		"linen-duvet-cover-set-coal-k-ck",
		"linen-duvet-cover-set-cobalt-f-q",
		"linen-duvet-cover-set-cobalt-k-ck",
		"linen-duvet-cover-set-dusk-f-q",
		"linen-duvet-cover-set-dusk-k-ck",
		"linen-duvet-cover-set-evergreen-f-q",
		"linen-duvet-cover-set-evergreen-k-ck",
		"linen-duvet-cover-set-fog-f-q",
		"linen-duvet-cover-set-fog-k-ck",
		"linen-duvet-cover-set-honey-f-q",
		"linen-duvet-cover-set-honey-k-ck",
		"linen-duvet-cover-set-java-f-q",
		"linen-duvet-cover-set-java-k-ck",
		"linen-duvet-cover-set-marigold-f-q",
		"linen-duvet-cover-set-marigold-k-ck",
		"linen-duvet-cover-set-moss-f-q",
		"linen-duvet-cover-set-moss-k-ck",
		"linen-duvet-cover-set-peacock-f-q",
		"linen-duvet-cover-set-peacock-k-ck",
		"linen-duvet-cover-set-toast-f-q",
		"linen-duvet-cover-set-toast-k-ck",
		"linen-duvet-cover-set-tobacco-f-q",
		"linen-duvet-cover-set-tobacco-k-ck",
		"linen-duvet-cover-set-white-f-q",
		"linen-duvet-cover-set-white-k-ck",
		"linen-duvet-cover-toast",
		"linen-duvet-cover-tobacco",
		"linen-duvet-cover-white",
		"linen-euro-sham-bone",
		"linen-euro-sham-coal",
		"linen-euro-sham-dusk",
		"linen-euro-sham-evergreen",
		"linen-euro-sham-fog",
		"linen-euro-sham-haze",
		"linen-euro-sham-java",
		"linen-euro-sham-moss",
		"linen-euro-sham-toast",
		"linen-euro-sham-white",
		"linen-fabric-swatch-bone",
		"linen-fabric-swatch-coal",
		"linen-fabric-swatch-cream",
		"linen-fabric-swatch-dusk",
		"linen-fabric-swatch-haze",
		"linen-fabric-swatch-java",
		"linen-fabric-swatch-moss",
		"linen-fabric-swatch-toast",
		"linen-fabric-swatch-white",
		"linen-fitted-sheet-bone",
		"linen-fitted-sheet-coal",
		"linen-fitted-sheet-cobalt",
		"linen-fitted-sheet-dusk",
		"linen-fitted-sheet-evergreen",
		"linen-fitted-sheet-fog",
		"linen-fitted-sheet-honey",
		"linen-fitted-sheet-java",
		"linen-fitted-sheet-marigold",
		"linen-fitted-sheet-moss",
		"linen-fitted-sheet-peacock",
		"linen-fitted-sheet-toast",
		"linen-fitted-sheet-tobacco",
		"linen-fitted-sheet-white",
		"linen-grain-sack-lumbar-pillow-cover",
		"linen-grain-sack-pillow-cover",
		"linen-pillow-cover-1",
		"linen-pillowcase-set-bone",
		"linen-pillowcase-set-coal",
		"linen-pillowcase-set-cobalt",
		"linen-pillowcase-set-dusk",
		"linen-pillowcase-set-evergreen",
		"linen-pillowcase-set-fog",
		"linen-pillowcase-set-honey",
		"linen-pillowcase-set-java",
		"linen-pillowcase-set-marigold",
		"linen-pillowcase-set-moss",
		"linen-pillowcase-set-peacock",
		"linen-pillowcase-set-toast",
		"linen-pillowcase-set-tobacco",
		"linen-pillowcase-set-white",
		"linen-sham-set-bone",
		"linen-sham-set-coal",
		"linen-sham-set-cobalt",
		"linen-sham-set-dusk",
		"linen-sham-set-evergreen",
		"linen-sham-set-fog",
		"linen-sham-set-honey",
		"linen-sham-set-java",
		"linen-sham-set-marigold",
		"linen-sham-set-moss",
		"linen-sham-set-peacock",
		"linen-sham-set-toast",
		"linen-sham-set-tobacco",
		"linen-sham-set-white",
		"linen-sheet-set-bone-f-q",
		"linen-sheet-set-bone-k-ck",
		"linen-sheet-set-coal-f-q",
		"linen-sheet-set-coal-k-ck",
		"linen-sheet-set-cobalt-f-q",
		"linen-sheet-set-cobalt-k-ck",
		"linen-sheet-set-dusk-f-q",
		"linen-sheet-set-dusk-k-ck",
		"linen-sheet-set-evergreen-f-q",
		"linen-sheet-set-evergreen-k-ck",
		"linen-sheet-set-fog-f-q",
		"linen-sheet-set-fog-k-ck",
		"linen-sheet-set-honey-f-q",
		"linen-sheet-set-honey-k-ck",
		"linen-sheet-set-java-f-q",
		"linen-sheet-set-java-k-ck",
		"linen-sheet-set-marigold-f-q",
		"linen-sheet-set-marigold-k-ck",
		"linen-sheet-set-moss-f-q",
		"linen-sheet-set-moss-k-ck",
		"linen-sheet-set-peacock-f-q-2",
		"linen-sheet-set-peacock-k-ck-1",
		"linen-sheet-set-toast-f-q",
		"linen-sheet-set-toast-k-ck",
		"linen-sheet-set-tobacco-f-q",
		"linen-sheet-set-tobacco-k-ck",
		"linen-sheet-set-white-f-q",
		"linen-sheet-set-white-k-ck",
		"linen-shower-curtain-bone",
		"linen-shower-curtain-white",
		"linen-stripe-robe-evergreen-and-peacock",
		"linen-stripe-robe-natural-with-yellow",
		"linen-top-sheet-bone",
		"linen-top-sheet-coal",
		"linen-top-sheet-cobalt",
		"linen-top-sheet-dusk",
		"linen-top-sheet-evergreen",
		"linen-top-sheet-fog",
		"linen-top-sheet-honey",
		"linen-top-sheet-java",
		"linen-top-sheet-marigold",
		"linen-top-sheet-moss",
		"linen-top-sheet-peacock",
		"linen-top-sheet-toast",
		"linen-top-sheet-tobacco",
		"linen-top-sheet-white",
		"linen-venice-set-bone-f-q",
		"linen-venice-set-bone-k-ck",
		"linen-venice-set-coal-f-q",
		"linen-venice-set-coal-k-ck",
		"linen-venice-set-cobalt-f-q",
		"linen-venice-set-cobalt-k-ck",
		"linen-venice-set-dusk-f-q",
		"linen-venice-set-dusk-k-ck",
		"linen-venice-set-evergreen-f-q",
		"linen-venice-set-evergreen-k-ck",
		"linen-venice-set-fog-f-q",
		"linen-venice-set-fog-k-ck-1",
		"linen-venice-set-honey-f-q",
		"linen-venice-set-honey-k-ck",
		"linen-venice-set-java-f-q",
		"linen-venice-set-java-k-ck",
		"linen-venice-set-marigold-f-q",
		"linen-venice-set-marigold-k-ck",
		"linen-venice-set-moss-f-q",
		"linen-venice-set-moss-k-ck",
		"linen-venice-set-peacock-f-q",
		"linen-venice-set-peacock-k-ck",
		"linen-venice-set-toast-f-q",
		"linen-venice-set-toast-k-ck",
		"linen-venice-set-tobacco-f-q",
		"linen-venice-set-tobacco-k-ck",
		"linen-venice-set-white-f-q",
		"linen-venice-set-white-k-ck",
		"linen-whip-stitch-pillow-cover-natural-with-black",
		"linen-whip-stitch-pillow-cover-natural-with-soft-black",
		"load-up-mattress-removal",
		"looped-bath-rug-bone",
		"looped-bath-rug-coal",
		"looped-bath-rug-moss",
		"looped-bath-rug-stone",
		"looped-bath-rug-white",
		"makeup-towel-set",
		"mango-wood-serving-bowl",
		"marble-cloud-cotton-euro-sham",
		"marble-cloud-cotton-quilt",
		"marfa-stripe-lumbar-pillow-cover-soft-black-and-natural",
		"matelasse-coverlet-dune",
		"matelasse-coverlet-fabric-swatch-white",
		"matelasse-coverlet-moss",
		"matelasse-coverlet-white",
		"matelasse-euro-sham-dune",
		"matelasse-euro-sham-moss",
		"matelasse-euro-sham-white",
		"matelasse-sham-set-dune",
		"matelasse-sham-set-moss",
		"matelasse-sham-set-white",
		"mattress",
		"mattress-protector",
		"meadow-print-duvet-cover-set",
		"merino-eye-mask-1",
		"merino-villa-bed-blanket-natural",
		"mini-body-trio",
		"mini-shower-mist-set",
		"modern-check-jacquard-duvet-cover-cream-and-bone",
		"modern-check-jacquard-duvet-cover-dusk-and-moss",
		"modern-check-jacquard-sham-set-cream-and-bone",
		"modern-check-jacquard-sham-set-dusk-and-moss",
		"modern-wool-lumbar-pillow-cover-evergreen-and-peacock",
		"modern-wool-lumbar-pillow-cover-natural-and-tobacco",
		"move-diffuser-black",
		"move-diffuser-white",
		"natural-alpaca-throw-java",
		"natural-alpaca-throw-tobacco",
		"nomad-lumbar-pillow-cover",
		"ojai-mini-lumbar-pillow-cover",
		"organic-air-cotton-toddler-quilt-bone",
		"organic-air-cotton-toddler-quilt-sage",
		"organic-air-cotton-toddler-quilt-sky",
		"organic-air-cotton-toddler-sham-bone",
		"organic-air-cotton-toddler-sham-sky",
		"organic-baby-washcloth-blush",
		"organic-baby-washcloth-light-grey",
		"organic-baby-washcloth-moss",
		"organic-baby-washcloth-natural",
		"organic-baby-washcloth-sky",
		"organic-baby-washcloth-white",
		"organic-cabana-beach-towel-lagoon-and-adobe",
		"organic-cabana-beach-towel-sage-and-honey",
		"organic-channel-gauze-throw-agave-and-spa",
		"organic-channel-gauze-throw-natural-and-ivory",
		"organic-channel-gauze-throw-natural-and-soft-black",
		"organic-checkered-bath-rug-moss-and-adobe",
		"organic-checkered-bath-rug-natural-and-black",
		"organic-cloud-cotton-duvet-cover-fabric-swatch-clay",
		"organic-cloud-cotton-duvet-cover-fabric-swatch-ivory",
		"organic-cloud-cotton-duvet-cover-fabric-swatch-moss",
		"organic-cloud-cotton-duvet-cover-fabric-swatch-natural",
		"organic-cloud-cotton-duvet-cover-fabric-swatch-white-1",
		"organic-cloud-cotton-duvet-cover-set-butter",
		"organic-cloud-cotton-duvet-cover-set-ivory",
		"organic-cloud-cotton-duvet-cover-set-moss",
		"organic-cloud-cotton-duvet-cover-set-natural",
		"organic-cloud-cotton-duvet-cover-set-white",
		"organic-cloud-cotton-euro-sham-moss",
		"organic-cloud-cotton-euro-sham-natural",
		"organic-cloud-cotton-euro-sham-smoke",
		"organic-cloud-cotton-euro-sham-warm-grey",
		"organic-cloud-cotton-euro-sham-white",
		"organic-cloud-cotton-fabric-swatch-clover",
		"organic-cloud-cotton-fabric-swatch-copy",
		"organic-cloud-cotton-fabric-swatch-copy-1",
		"organic-cloud-cotton-fabric-swatch-white",
		"organic-cloud-cotton-fabric-swatch-white-copy",
		"organic-cloud-cotton-quilt-fabric-swatch-clay",
		"organic-cloud-cotton-quilt-fabric-swatch-moss",
		"organic-cloud-cotton-quilt-fabric-swatch-steel-and-smoke",
		"organic-cloud-cotton-quilt-fabric-swatch-white",
		"organic-cloud-cotton-quilt-moss",
		"organic-cloud-cotton-quilt-natural-and-ivory",
		"organic-cloud-cotton-quilt-steel-and-smoke",
		"organic-cloud-cotton-quilt-warm-grey",
		"organic-cloud-cotton-quilt-white",
		"organic-cloud-cotton-sham-set-moss",
		"organic-cloud-cotton-sham-set-natural",
		"organic-cloud-cotton-sham-set-smoke",
		"organic-cloud-cotton-sham-set-warm-grey",
		"organic-cloud-cotton-sham-set-white",
		"organic-cloud-cotton-shower-curtain-bone",
		"organic-cloud-cotton-shower-curtain-moss",
		"organic-cloud-cotton-shower-curtain-white",
		"organic-cloud-cotton-stripe-toddler-quilt-adobe-and-clay",
		"organic-cloud-cotton-stripe-toddler-quilt-wave-and-horizon",
		"organic-cloud-cotton-toddler-quilt-moss",
		"organic-cloud-cotton-toddler-quilt-natural-and-ivory",
		"organic-cloud-cotton-toddler-quilt-smoke-and-blush",
		"organic-cloud-cotton-toddler-quilt-steel-and-smoke",
		"organic-cloud-cotton-toddler-sham-moss",
		"organic-cloud-cotton-toddler-sham-natural",
		"organic-cloud-cotton-toddler-sham-smoke",
		"organic-corduroy-duvet-cover-set",
		"organic-cotton-breeze-comforter-bone",
		"organic-cotton-breeze-comforter-moss",
		"organic-cotton-euro-sham-white",
		"organic-cotton-fitted-sheet-dusk",
		"organic-cotton-mosaic-towels-ash-and-toast",
		"organic-cotton-mosaic-towels-moss-and-dusk",
		"organic-cotton-mosaic-towels-multi",
		"organic-cotton-mosaic-towels-ochre-and-clay",
		"organic-cotton-puff-comforter-bone",
		"organic-cotton-puff-comforter-dusk",
		"organic-cotton-puff-comforter-evergreen",
		"organic-cotton-puff-comforter-haze",
		"organic-cotton-puff-comforter-mist",
		"organic-cotton-puff-comforter-moss",
		"organic-cotton-puff-comforter-white",
		"organic-cotton-sham-set-willow",
		"organic-cotton-top-sheet-white",
		"organic-cotton-towels-bone",
		"organic-gauze-terry-robe-moss-with-cream",
		"organic-gauze-terry-robe-natural-with-cream",
		"organic-hooded-baby-towel-blush",
		"organic-hooded-baby-towel-light-grey",
		"organic-hooded-baby-towel-moss",
		"organic-hooded-baby-towel-natural",
		"organic-hooded-baby-towel-sky",
		"organic-hooded-baby-towel-white",
		"organic-hooded-baby-towel-with-ears-blush",
		"organic-hooded-baby-towel-with-ears-natural",
		"organic-hooded-baby-towel-with-ears-sky",
		"organic-hooded-baby-towel-with-ears-white",
		"organic-hooded-toddler-towel-blush",
		"organic-hooded-toddler-towel-light-grey",
		"organic-hooded-toddler-towel-moss",
		"organic-hooded-toddler-towel-natural",
		"organic-hooded-toddler-towel-sky",
		"organic-hooded-toddler-towel-white",
		"organic-hooded-toddler-towel-with-ears-blush",
		"organic-hooded-toddler-towel-with-ears-natural",
		"organic-hooded-toddler-towel-with-ears-sky",
		"organic-hooded-toddler-towel-with-ears-white",
		"organic-keys-jacquard-bolster-pillow-cover-bone-and-cream",
		"organic-keys-jacquard-bolster-pillow-cover-dusk-and-evergreen",
		"organic-keys-jacquard-coverlet-bone-and-cream",
		"organic-keys-jacquard-coverlet-dusk-and-evergreen",
		"organic-ladder-stripe-towels-moss-and-dusk",
		"organic-ladder-stripe-towels-toast-and-cream",
		"organic-ladder-stripe-towels-tobacco-and-cream",
		"organic-mini-mosaic-baby-washcloth-blush-and-adobe",
		"organic-mini-mosaic-baby-washcloth-wave-and-sage",
		"organic-mini-mosaic-hooded-toddler-towel-blush-and-adobe",
		"organic-mini-mosaic-hooded-toddler-towel-wave-and-sage",
		"organic-mosaic-robe-ash-and-toast",
		"organic-mosaic-robe-moss-and-dusk",
		"organic-mosaic-tub-mat-ash-and-toast",
		"organic-mosaic-tub-mat-moss-and-dusk",
		"organic-mosaic-tub-mat-multi",
		"organic-mosaic-tub-mat-ochre-and-clay",
		"organic-oasis-shower-curtain-natural-with-soft-black",
		"organic-plaid-waffle-robe",
		"organic-plush-towels-adobe",
		"organic-plush-towels-bone",
		"organic-plush-towels-sage",
		"organic-plush-towels-white",
		"organic-plush-tub-mat-adobe",
		"organic-plush-tub-mat-bone",
		"organic-plush-tub-mat-sage",
		"organic-plush-tub-mat-white",
		"organic-resort-stripe-hair-wrap-adobe-with-butter",
		"organic-resort-stripe-hair-wrap-plaster-with-soft-black",
		"organic-resort-stripe-towels-adobe-with-butter",
		"organic-resort-stripe-towels-camel-with-soft-black",
		"organic-resort-stripe-towels-moss-with-java",
		"organic-resort-stripe-towels-plaster-with-soft-black",
		"organic-resort-stripe-towels-sage-with-russet",
		"organic-resort-stripe-tub-mat-adobe-with-butter",
		"organic-resort-stripe-tub-mat-camel-with-soft-black",
		"organic-resort-stripe-tub-mat-moss-with-java",
		"organic-resort-stripe-tub-mat-plaster-with-soft-black",
		"organic-resort-stripe-tub-mat-sage-with-russet",
		"organic-rib-knit-throw-bone",
		"organic-rib-knit-throw-dusk",
		"organic-soft-luxe-duvet-cover-bone",
		"organic-soft-luxe-duvet-cover-haze",
		"organic-soft-luxe-duvet-cover-white",
		"organic-soft-luxe-euro-sham-bone",
		"organic-soft-luxe-euro-sham-white",
		"organic-soft-luxe-pillowcase-set-bone",
		"organic-soft-luxe-pillowcase-set-haze",
		"organic-soft-luxe-pillowcase-set-white",
		"organic-soft-luxe-top-sheet-bone",
		"organic-soft-luxe-top-sheet-haze",
		"organic-soft-luxe-top-sheet-white",
		"organic-tassel-bath-rug-natural",
		"organic-tassel-bath-rug-warm-grey-and-soft-black",
		"organic-two-tone-rib-knit-throw-bone-and-tobacco",
		"organic-two-tone-rib-knit-throw-cream-and-flax",
		"organic-two-tone-rib-knit-throw-moss-and-evergreen",
		"organic-waffle-sham-set-cream",
		"organic-waffle-sham-set-mist",
		"oval-platter",
		"oversized-rib-knit-throw-marled",
		"palm-leaf-nesting-basket",
		"parachute-holiday-stocking",
		"patina-linen-euro-sham",
		"pebble-handwoven-pillow-cover-cream",
		"percale-bundle-adobe-f-q",
		"percale-bundle-adobe-k-ck",
		"percale-bundle-agave-f-q",
		"percale-bundle-agave-k-ck",
		"percale-bundle-bone-f-q",
		"percale-bundle-bone-k-ck",
		"percale-bundle-bone-stripe-f-q",
		"percale-bundle-bone-stripe-k-ck",
		"percale-bundle-butter-f-q",
		"percale-bundle-butter-k-ck",
		"percale-bundle-cream-f-q",
		"percale-bundle-cream-k-ck",
		"percale-bundle-dusk-stripe-f-q",
		"percale-bundle-dusk-stripe-k-ck",
		"percale-bundle-haze-f-q",
		"percale-bundle-haze-k-ck",
		"percale-bundle-java-f-q",
		"percale-bundle-java-k-ck",
		"percale-bundle-light-grey-f-q",
		"percale-bundle-light-grey-k-ck",
		"percale-bundle-moss-f-q",
		"percale-bundle-moss-k-ck",
		"percale-bundle-moss-stripe-f-q",
		"percale-bundle-moss-stripe-k-ck",
		"percale-bundle-sage-f-q",
		"percale-bundle-sage-k-ck",
		"percale-bundle-slate-f-q",
		"percale-bundle-slate-k-ck",
		"percale-bundle-white-f-q",
		"percale-bundle-white-k-ck",
		"percale-crib-sheet-animal-print",
		"percale-crib-sheet-blueberries",
		"percale-crib-sheet-bone",
		"percale-crib-sheet-clementines",
		"percale-crib-sheet-moss",
		"percale-crib-sheet-moss-stripe",
		"percale-crib-sheet-white",
		"percale-duvet-cover-adobe",
		"percale-duvet-cover-agave",
		"percale-duvet-cover-bone",
		"percale-duvet-cover-bone-stripe",
		"percale-duvet-cover-butter",
		"percale-duvet-cover-cream",
		"percale-duvet-cover-dusk-stripe",
		"percale-duvet-cover-java",
		"percale-duvet-cover-light-grey",
		"percale-duvet-cover-moss",
		"percale-duvet-cover-moss-stripe",
		"percale-duvet-cover-sage",
		"percale-duvet-cover-set-adobe-f-q",
		"percale-duvet-cover-set-adobe-k-ck-1",
		"percale-duvet-cover-set-agave-f-q",
		"percale-duvet-cover-set-agave-k-ck",
		"percale-duvet-cover-set-bone-f-q",
		"percale-duvet-cover-set-bone-k-ck",
		"percale-duvet-cover-set-bone-stripe-f-q",
		"percale-duvet-cover-set-bone-stripe-k-ck",
		"percale-duvet-cover-set-butter-f-q",
		"percale-duvet-cover-set-butter-k-ck",
		"percale-duvet-cover-set-cream-f-q",
		"percale-duvet-cover-set-cream-k-ck",
		"percale-duvet-cover-set-dusk-stripe-f-q",
		"percale-duvet-cover-set-dusk-stripe-k-ck",
		"percale-duvet-cover-set-java-f-q",
		"percale-duvet-cover-set-java-k-ck",
		"percale-duvet-cover-set-light-grey-f-q",
		"percale-duvet-cover-set-light-grey-k-ck",
		"percale-duvet-cover-set-moss-f-q",
		"percale-duvet-cover-set-moss-k-ck",
		"percale-duvet-cover-set-moss-stripe-f-q",
		"percale-duvet-cover-set-moss-stripe-k-ck",
		"percale-duvet-cover-set-sage-f-q",
		"percale-duvet-cover-set-sage-k-ck",
		"percale-duvet-cover-set-slate-f-q",
		"percale-duvet-cover-set-slate-k-ck",
		"percale-duvet-cover-set-white-f-q",
		"percale-duvet-cover-set-white-k-ck",
		"percale-duvet-cover-slate",
		"percale-duvet-cover-white",
		"percale-euro-sham-adobe",
		"percale-euro-sham-agave",
		"percale-euro-sham-bone",
		"percale-euro-sham-butter",
		"percale-euro-sham-cream",
		"percale-euro-sham-java",
		"percale-euro-sham-light-grey",
		"percale-euro-sham-moss",
		"percale-euro-sham-sage",
		"percale-euro-sham-slate",
		"percale-euro-sham-white",
		"percale-fabric-swatch-agave",
		"percale-fabric-swatch-bone",
		"percale-fabric-swatch-cream",
		"percale-fabric-swatch-java",
		"percale-fabric-swatch-light-grey",
		"percale-fabric-swatch-moss",
		"percale-fabric-swatch-slate",
		"percale-fabric-swatch-white",
		"percale-fitted-sheet-adobe",
		"percale-fitted-sheet-agave",
		"percale-fitted-sheet-bone",
		"percale-fitted-sheet-bone-stripe",
		"percale-fitted-sheet-butter",
		"percale-fitted-sheet-cream",
		"percale-fitted-sheet-dusk-stripe",
		"percale-fitted-sheet-haze",
		"percale-fitted-sheet-java",
		"percale-fitted-sheet-light-grey",
		"percale-fitted-sheet-moss",
		"percale-fitted-sheet-moss-stripe",
		"percale-fitted-sheet-sage",
		"percale-fitted-sheet-slate",
		"percale-fitted-sheet-white",
		"percale-pillowcase-set-adobe",
		"percale-pillowcase-set-agave",
		"percale-pillowcase-set-bone",
		"percale-pillowcase-set-bone-stripe",
		"percale-pillowcase-set-butter",
		"percale-pillowcase-set-cream",
		"percale-pillowcase-set-dusk-stripe",
		"percale-pillowcase-set-java",
		"percale-pillowcase-set-light-grey-1",
		"percale-pillowcase-set-moss",
		"percale-pillowcase-set-moss-stripe",
		"percale-pillowcase-set-sage",
		"percale-pillowcase-set-slate",
		"percale-pillowcase-set-spa",
		"percale-pillowcase-set-white",
		"percale-sham-set-adobe",
		"percale-sham-set-agave",
		"percale-sham-set-bone",
		"percale-sham-set-bone-stripe",
		"percale-sham-set-butter",
		"percale-sham-set-cream",
		"percale-sham-set-dusk-stripe",
		"percale-sham-set-java",
		"percale-sham-set-light-grey",
		"percale-sham-set-moss",
		"percale-sham-set-moss-stripe",
		"percale-sham-set-sage",
		"percale-sham-set-slate",
		"percale-sham-set-white",
		"percale-sheet-set-adobe-f-q",
		"percale-sheet-set-adobe-k-ck",
		"percale-sheet-set-agave-f-q",
		"percale-sheet-set-agave-k-ck",
		"percale-sheet-set-bone-f-q",
		"percale-sheet-set-bone-stripe-f-q",
		"percale-sheet-set-bone-stripe-k-ck",
		"percale-sheet-set-butter-f-q",
		"percale-sheet-set-butter-k-ck",
		"percale-sheet-set-butter-k-ck-1",
		"percale-sheet-set-cream-f-q",
		"percale-sheet-set-cream-k-ck",
		"percale-sheet-set-dusk-stripe-f-q",
		"percale-sheet-set-dusk-stripe-k-ck",
		"percale-sheet-set-haze-f-q",
		"percale-sheet-set-haze-k-ck",
		"percale-sheet-set-java-f-q",
		"percale-sheet-set-java-k-ck",
		"percale-sheet-set-light-grey-f-q",
		"percale-sheet-set-light-grey-k-ck",
		"percale-sheet-set-moss-f-q",
		"percale-sheet-set-moss-k-ck",
		"percale-sheet-set-moss-stripe-f-q",
		"percale-sheet-set-moss-stripe-k-ck",
		"percale-sheet-set-sage-f-q",
		"percale-sheet-set-sage-k-ck",
		"percale-sheet-set-slate-f-q",
		"percale-sheet-set-slate-k-ck",
		"percale-sheet-set-white-f-q",
		"percale-sheet-set-white-k-ck",
		"percale-top-sheet-adobe",
		"percale-top-sheet-agave",
		"percale-top-sheet-bone",
		"percale-top-sheet-bone-stripe",
		"percale-top-sheet-butter",
		"percale-top-sheet-cream",
		"percale-top-sheet-dusk-stripe",
		"percale-top-sheet-haze",
		"percale-top-sheet-haze-1",
		"percale-top-sheet-java",
		"percale-top-sheet-light-grey",
		"percale-top-sheet-moss",
		"percale-top-sheet-moss-stripe",
		"percale-top-sheet-sage",
		"percale-top-sheet-slate-1",
		"percale-top-sheet-white",
		"percale-venice-set-adobe-f-q",
		"percale-venice-set-adobe-k-ck",
		"percale-venice-set-agave-f-q",
		"percale-venice-set-agave-k-ck",
		"percale-venice-set-bone-f-q",
		"percale-venice-set-bone-k-ck",
		"percale-venice-set-bone-stripe-f-q",
		"percale-venice-set-bone-stripe-k-ck",
		"percale-venice-set-butter-f-q",
		"percale-venice-set-butter-k-ck",
		"percale-venice-set-cream-f-q",
		"percale-venice-set-cream-k-ck",
		"percale-venice-set-dusk-stripe-f-q",
		"percale-venice-set-dusk-stripe-k-ck",
		"percale-venice-set-haze-f-q",
		"percale-venice-set-haze-k-ck",
		"percale-venice-set-java-f-q",
		"percale-venice-set-java-k-ck",
		"percale-venice-set-light-grey-f-q",
		"percale-venice-set-light-grey-k-ck",
		"percale-venice-set-moss-f-q",
		"percale-venice-set-moss-k-ck",
		"percale-venice-set-moss-stripe-f-q",
		"percale-venice-set-moss-stripe-k-ck",
		"percale-venice-set-sage-f-q",
		"percale-venice-set-sage-k-ck",
		"percale-venice-set-slate-f-q",
		"percale-venice-set-slate-k-ck",
		"percale-venice-set-white-f-q",
		"percale-venice-set-white-k-ck",
		"pillow-protector",
		"plaid-wool-alpaca-throw-midnight-plaid",
		"plaid-wool-alpaca-throw-natural-plaid",
		"product-fees",
		"puckered-euro-sham-1",
		"pumice-stone",
		"rainbow-pillowcase-set",
		"rainbow-quilted-toddler-sham",
		"rainbow-toddler-quilt",
		"rainbow-venice-set",
		"recycled-down-pillow",
		"rhino-baby",
		"riviera-beach-towel-honey",
		"riviera-beach-towel-sage",
		"riviera-beach-towel-soft-black",
		"round-pillow-insert",
		"sateen-bundle-bone-f-q",
		"sateen-bundle-bone-k-ck",
		"sateen-bundle-cream-f-q",
		"sateen-bundle-cream-k-ck",
		"sateen-bundle-dusk-f-q",
		"sateen-bundle-dusk-k-ck",
		"sateen-bundle-evergreen-f-q",
		"sateen-bundle-evergreen-k-ck",
		"sateen-bundle-light-grey-f-q",
		"sateen-bundle-light-grey-k-ck",
		"sateen-bundle-white-f-q",
		"sateen-bundle-white-k-ck",
		"sateen-duvet-cover-bone",
		"sateen-duvet-cover-cream",
		"sateen-duvet-cover-dusk",
		"sateen-duvet-cover-evergreen",
		"sateen-duvet-cover-light-grey",
		"sateen-duvet-cover-set-bone-f-q",
		"sateen-duvet-cover-set-bone-k-ck",
		"sateen-duvet-cover-set-cream-f-q",
		"sateen-duvet-cover-set-cream-k-ck",
		"sateen-duvet-cover-set-dusk-f-q",
		"sateen-duvet-cover-set-dusk-k-ck",
		"sateen-duvet-cover-set-evergreen-f-q",
		"sateen-duvet-cover-set-evergreen-k-ck",
		"sateen-duvet-cover-set-light-grey-f-q",
		"sateen-duvet-cover-set-light-grey-k-ck",
		"sateen-duvet-cover-set-white-f-q",
		"sateen-duvet-cover-set-white-k-ck",
		"sateen-duvet-cover-white",
		"sateen-euro-sham-bone",
		"sateen-euro-sham-cream",
		"sateen-euro-sham-light-grey",
		"sateen-euro-sham-white",
		"sateen-euro-sham-willow",
		"sateen-fabric-swatch-blush",
		"sateen-fabric-swatch-bone",
		"sateen-fabric-swatch-cream",
		"sateen-fabric-swatch-light-grey",
		"sateen-fabric-swatch-white",
		"sateen-fitted-sheet-blush",
		"sateen-fitted-sheet-bone",
		"sateen-fitted-sheet-cream",
		"sateen-fitted-sheet-dusk",
		"sateen-fitted-sheet-evergreen",
		"sateen-fitted-sheet-light-grey",
		"sateen-fitted-sheet-sand",
		"sateen-fitted-sheet-white",
		"sateen-fitted-sheet-willow",
		"sateen-pillowcase-set-bone",
		"sateen-pillowcase-set-cream",
		"sateen-pillowcase-set-dusk",
		"sateen-pillowcase-set-evergreen",
		"sateen-pillowcase-set-fawn",
		"sateen-pillowcase-set-light-grey",
		"sateen-pillowcase-set-slate",
		"sateen-pillowcase-set-white",
		"sateen-pillowcase-set-willow",
		"sateen-sham-set-blush",
		"sateen-sham-set-bone",
		"sateen-sham-set-cream",
		"sateen-sham-set-dusk",
		"sateen-sham-set-evergreen",
		"sateen-sham-set-fawn",
		"sateen-sham-set-light-grey",
		"sateen-sham-set-navy",
		"sateen-sham-set-powder-blue",
		"sateen-sham-set-sand",
		"sateen-sham-set-slate",
		"sateen-sham-set-white",
		"sateen-sham-set-willow",
		"sateen-sheet-set-bone-f-q",
		"sateen-sheet-set-bone-k-ck",
		"sateen-sheet-set-cream-f-q",
		"sateen-sheet-set-cream-k-ck",
		"sateen-sheet-set-dusk-f-q",
		"sateen-sheet-set-dusk-k-ck",
		"sateen-sheet-set-evergreen-f-q",
		"sateen-sheet-set-evergreen-k-ck",
		"sateen-sheet-set-light-grey-f-q",
		"sateen-sheet-set-light-grey-k-ck",
		"sateen-sheet-set-white-f-q",
		"sateen-sheet-set-white-k-ck",
		"sateen-top-sheet-bone",
		"sateen-top-sheet-cream",
		"sateen-top-sheet-dusk",
		"sateen-top-sheet-evergreen",
		"sateen-top-sheet-light-grey",
		"sateen-top-sheet-white",
		"sateen-top-sheet-willow",
		"sateen-venice-set-bone-f-q",
		"sateen-venice-set-bone-k-ck",
		"sateen-venice-set-cream-f-q",
		"sateen-venice-set-cream-k-ck",
		"sateen-venice-set-dusk-f-q",
		"sateen-venice-set-dusk-k-ck",
		"sateen-venice-set-evergreen-f-q",
		"sateen-venice-set-evergreen-k-ck",
		"sateen-venice-set-light-grey-f-q",
		"sateen-venice-set-light-grey-k-ck",
		"sateen-venice-set-white-f-q",
		"sateen-venice-set-white-k-ck",
		"scalloped-quilt",
		"scalloped-sham-set",
		"seafarer-basket",
		"serving-spoon-set",
		"shearling-wool-lounge-slippers-natural",
		"shearling-wool-lounge-slippers-olive",
		"shower-curtain-hooks-chrome",
		"shower-curtain-hooks-matte-black",
		"shower-curtain-liner",
		"sierra-handwoven-pillow-cover-marine",
		"sierra-handwoven-pillow-cover-turmeric",
		"sierra-mini-lumbar-pillow-cover-java",
		"sierra-mini-lumbar-pillow-cover-turmeric",
		"signature-kit",
		"silk-eye-mask",
		"silk-pillowcase-bone",
		"silk-pillowcase-light-grey",
		"silk-pillowcase-moss",
		"silk-pillowcase-slate",
		"silk-pillowcase-white",
		"soft-cotton-quilt-bone",
		"soft-cotton-quilt-white",
		"soft-cotton-quilted-sham-set-white",
		"soft-cotton-sham-set-bone",
		"soft-rib-towels-agave",
		"soft-rib-towels-bone",
		"soft-rib-towels-canyon",
		"soft-rib-towels-dark-grey",
		"soft-rib-towels-dusk",
		"soft-rib-towels-lagoon",
		"soft-rib-towels-light-grey",
		"soft-rib-towels-marine",
		"soft-rib-towels-moss",
		"soft-rib-towels-sage",
		"soft-rib-towels-white",
		"soft-rib-tub-mat-bone",
		"soft-rib-tub-mat-dark-grey",
		"soft-rib-tub-mat-dusk",
		"soft-rib-tub-mat-lagoon",
		"soft-rib-tub-mat-marine",
		"soft-rib-tub-mat-moss",
		"soft-rib-tub-mat-sage",
		"soft-rib-tub-mat-white",
		"soft-spun-cotton-throw-grey",
		"soft-spun-cotton-throw-natural",
		"speckled-bath-rug",
		"stargaze-wool-throw-natural-and-tobacco",
		"stella-vase",
		"stoneware-mug-set-1",
		"stoneware-serveware",
		"stoneware-serveware-1",
		"stripe-beach-blanket-natural-stripe",
		"stuffed-teddy-dad",
		"summit-side-table",
		"sunburst-pillowcase-set",
		"sunburst-quilted-toddler-sham",
		"sunburst-toddler-quilt",
		"sunset-bath-rug",
		"taos-stripe-body-pillow-cover",
		"taos-stripe-pillow-cover",
		"tec-paper-placemats",
		"terrace-gauze-duvet-cover-dusk",
		"terrace-gauze-duvet-cover-toast",
		"terrace-gauze-duvet-cover-white",
		"terrace-gauze-sham-set-dusk",
		"terrace-gauze-sham-set-toast",
		"terrace-gauze-sham-set-white",
		"terry-stripe-robe-bone-and-tobacco",
		"terry-stripe-robe-dusk-and-adobe",
		"terry-stripe-robe-moss-and-peacock",
		"terry-stripe-slippers-bone-and-tobacco",
		"terry-stripe-slippers-dusk-and-adobe",
		"terry-stripe-slippers-moss-anf-peacock",
		"the-deck-and-notebook-set",
		"the-parachute-candle",
		"the-parachute-candle-rest",
		"the-parachute-candle-rise",
		"the-sanitizer-sampler-kit",
		"toddler-linen-box-quilt-bone",
		"toddler-linen-box-quilt-dusk",
		"toddler-linen-box-quilted-sham-bone",
		"toddler-linen-box-quilted-sham-dusk",
		"toddler-moon-pillow-cover",
		"toddler-pillow",
		"toddler-sun-pillow-cover",
		"two-tone-towels-grey-and-coal",
		"two-tone-towels-ivory-and-ochre",
		"two-tone-towels-white-and-ivory",
		"urch-salt-cellar",
		"valley-handwoven-lumbar-pillow-cover-turmeric-kelp",
		"velo-flatware-set-brushed-gold",
		"velvet-body-pillow-cover",
		"velvet-pillow-cover",
		"vintage-linen-bed-blanket-antique-white",
		"vintage-linen-bed-blanket-coal",
		"vintage-linen-bed-blanket-evergreen",
		"vintage-linen-bed-blanket-moss",
		"vintage-linen-bed-blanket-natural",
		"vintage-linen-body-pillow-cover-antique-white",
		"vintage-linen-body-pillow-cover-coal",
		"vintage-linen-body-pillow-cover-evergreen",
		"vintage-linen-body-pillow-cover-kelp",
		"vintage-linen-body-pillow-cover-moss",
		"vintage-linen-body-pillow-cover-natural",
		"vintage-linen-euro-pillow-cover-1",
		"vintage-linen-euro-pillow-cover-coal",
		"vintage-linen-euro-pillow-cover-natural",
		"vintage-linen-fabric-swatch-antique-white",
		"vintage-linen-fabric-swatch-coal",
		"vintage-linen-fabric-swatch-evergreen",
		"vintage-linen-fabric-swatch-kelp",
		"vintage-linen-fabric-swatch-moss",
		"vintage-linen-fabric-swatch-natural",
		"vintage-linen-lumbar-pillow-cover-antique-white",
		"vintage-linen-lumbar-pillow-cover-marine",
		"vintage-linen-lumbar-pillow-cover-natural",
		"vintage-linen-pillow-cover-antique-white",
		"vintage-linen-pillow-cover-celery",
		"vintage-linen-pillow-cover-natural",
		"vintage-linen-pillow-cover-pecan",
		"vintage-linen-pillow-cover-raisin",
		"vintage-linen-pillow-cover-wheat",
		"vintage-linen-round-pillow-cover-1",
		"vintage-linen-throw-evergreen",
		"vintage-linen-throw-marine",
		"vintage-linen-throw-natural",
		"waffle-baby-blanket-blush",
		"waffle-baby-blanket-fawn",
		"waffle-baby-blanket-willow",
		"waffle-robe-grey",
		"waffle-robe-haze",
		"waffle-robe-tan",
		"waffle-robe-white",
		"waffle-shower-curtain-bone",
		"waffle-shower-curtain-grey",
		"waffle-shower-curtain-white",
		"waffle-towels-bone",
		"waffle-towels-charcoal",
		"waffle-towels-evergreen",
		"waffle-towels-white",
		"washed-linen-sheer-curtain",
		"windowpane-gauze-duvet-cover-set",
		"wool-dryer-ball",
	],
	assetBracePattern: new RegExp(
		[
			"^", // Start of string
			"(.*?)", // Capture prefix (any characters, non-greedy)
			"\\{", // Literal opening brace
			"([^{}]+)", // Capture options (non-brace characters, at least one)
			"\\}", // Literal closing brace
			"(.*)", // Capture suffix (any characters)
			"$", // End of string
		].join(""),
	),

	validateAssetName(assetName) {
		// Check if asset name ends with _\d+$ pattern
		const suffixPattern = /_\d+$/;
		if (!suffixPattern.test(assetName)) {
			return { valid: false, matches: [] };
		}

		// Extract the handle part (everything before the last underscore followed by digits)
		const handlePart = assetName.replace(/_\d+$/, "");

		// Build list of handles to match against
		let expandedHandles;
		const braceMatch = handlePart.match(this.assetBracePattern);

		if (braceMatch) {
			const [, prefix, optionsStr, suffix] = braceMatch;

			// Split options and expand each one
			const options = optionsStr.split(",").map((opt) => opt.trim());
			expandedHandles = options.map((option) => prefix + option + suffix);
		} else {
			// Standard exact match for non-glob patterns
			expandedHandles = [handlePart];
		}

		// Find matches for all expanded handles
		const matches = this.validHandles.filter((handle) =>
			expandedHandles.includes(handle),
		);

		return { valid: matches.length > 0, matches: matches };
	},

	async main() {
		await this.uiBuild();
	},

	// uiCreate* → Creates and returns DOM elements
	// uiSetup* → Configures behavior and attaches event handlers
	// uiRender* → Updates/displays content dynamically
	//
	// main() → uiBuild()
	// ├── uiCreateMainContainer()
	// ├── uiSetupHandlesSidebar()
	// └── uiCreateAssetsList()
	//     └── for each asset: uiCreateAssetItem()
	//         ├── uiSetupAssetValidation() → uiRenderValidationDisplay()
	//         └── uiSetupAssetForm()

	async uiBuild() {
		const assets = await this.allAssets(this.getActiveFolderId());

		const container = this.uiCreateMainContainer();
		this.uiSetupBulkOperations(container);
		this.uiSetupHandlesSidebar(container);
		this.uiCreateAssetsList(container, assets);
	},

	uiCreateMainContainer() {
		const container = document.body;
		const fileChompyContainer = document.createElement("div");
		fileChompyContainer.id = "FileChompyContainer";

		fileChompyContainer.innerHTML = `
			<style>${this.css}</style>
			<h1>
				<div>👹 FileChompy<br><small>Folder: ${WebDAM.FOLDER_NAME} (${WebDAM.FOLDER_ID})</small></div>
				<button type="button" id="toggle-bulk" class="toggle-bulk-button">
					🔄 Bulk Find/Replace
				</button>
			</h1>
			<div class="bulk-operations" style="display: none;">
			</div>
			<div class="main-content">
				<div class="assets-section">
				</div>
				<div class="handles-sidebar">
					<h2>📋 Valid Handles Reference</h2>
					<div class="handles-search">
						<input type="text" placeholder="Search handles..." id="handles-search-input">
					</div>
					<div class="handles-list" id="handles-list">
					</div>
				</div>
			</div>
		`;
		container.appendChild(fileChompyContainer);
		return fileChompyContainer;
	},

	uiSetupBulkOperations(container) {
		const bulkSection = container.querySelector(".bulk-operations");

		bulkSection.innerHTML = `
			<h2>🔄 Bulk Find & Replace</h2>
			<div class="bulk-form">
				<div class="bulk-input-group">
					<label for="bulk-find">Find:</label>
					<input type="text" id="bulk-find">
				</div>
				<div class="bulk-input-group">
					<label for="bulk-replace">Replace:</label>
					<input type="text" id="bulk-replace">
				</div>
				<div class="bulk-actions">
					<button type="button" id="bulk-apply" disabled>Apply Changes</button>
				</div>
			</div>
			<div class="bulk-preview" id="bulk-preview-container"></div>
			<div class="bulk-progress" id="bulk-progress"></div>
		`;

		// Setup toggle button
		const toggleButton = container.querySelector("#toggle-bulk");
		toggleButton.addEventListener("click", () => {
			if (bulkSection.style.display === "none") {
				bulkSection.style.display = "block";
				toggleButton.textContent = "🔄 Hide Bulk Tools";
			} else {
				bulkSection.style.display = "none";
				toggleButton.textContent = "🔄 Bulk Find/Replace";
			}
		});

		// Setup event listeners
		const findInput = bulkSection.querySelector("#bulk-find");
		const replaceInput = bulkSection.querySelector("#bulk-replace");
		const applyButton = bulkSection.querySelector("#bulk-apply");

		applyButton.addEventListener("click", () => {
			const findPattern = findInput.value;
			const replacePattern = replaceInput.value;
			this.applyBulkFindReplace(findPattern, replacePattern);
		});

		// Enable live preview on input
		[findInput, replaceInput].forEach((input) => {
			input.addEventListener("input", () => {
				const findPattern = findInput.value;
				const replacePattern = replaceInput.value;
				if (findPattern) {
					this.uiGenerateBulkPreview(findPattern, replacePattern);
				} else {
					document.querySelector("#bulk-preview-container").innerHTML = "";
					applyButton.disabled = true;
				}
			});
		});
	},

	uiSetupHandlesSidebar(container) {
		const handlesList = container.querySelector("#handles-list");
		const searchInput = container.querySelector("#handles-search-input");

		const renderHandles = (filteredHandles = this.validHandles) => {
			handlesList.innerHTML = "";
			filteredHandles.forEach((handle) => {
				const handleItem = document.createElement("div");
				handleItem.className = "handle-item";
				handleItem.textContent = handle;
				handleItem.addEventListener("click", () => {
					// Copy handle to clipboard
					navigator.clipboard.writeText(handle).then(() => {
						// Show temporary feedback
						const originalText = handleItem.textContent;
						handleItem.textContent = "✓ Copied!";
						handleItem.style.backgroundColor = "#d4edda";
						setTimeout(() => {
							handleItem.textContent = originalText;
							handleItem.style.backgroundColor = "";
						}, 1000);
					});
				});
				handlesList.appendChild(handleItem);
			});
		};

		// Initial render of all handles
		renderHandles();

		// Add search functionality
		searchInput.addEventListener("input", (e) => {
			const searchTerm = e.target.value.toLowerCase();
			const filteredHandles = this.validHandles.filter((handle) =>
				handle.toLowerCase().includes(searchTerm),
			);
			renderHandles(filteredHandles);
		});
	},

	uiCreateAssetsList(container, assets) {
		const assetsSection = container.querySelector(".assets-section");
		const list = document.createElement("ul");
		assetsSection.appendChild(list);

		for (const assetData of assets) {
			const listItem = this.uiCreateAssetItem(assetData);
			list.appendChild(listItem);
		}
	},

	uiCreateAssetItem(assetData) {
		const listItem = document.createElement("li");
		const assetNameWithoutExtension = this.stripExtension(
			assetData.asset.title,
		);

		// Add data attributes to the li element for easier access
		listItem.setAttribute("data-asset-id", assetData.asset.id);
		listItem.setAttribute("data-asset-name", assetNameWithoutExtension);

		listItem.innerHTML = `
			<img src="${assetData.asset.thumburl.thumb100}">
			<div class="form-container">
				<form>
					<input
						type="text"
						value="${assetNameWithoutExtension}"
						name="assetName"
					>
					<button type="submit">Rename</button>
				</form>
				<div class="matches-display"></div>
			</div>
		`;

		// Setup validation and form handling
		this.uiSetupAssetValidation(listItem, assetNameWithoutExtension);
		this.uiSetupAssetForm(listItem);

		return listItem;
	},

	uiSetupAssetValidation(listItem, initialAssetName) {
		const input = listItem.querySelector('input[name="assetName"]');
		const matchesDisplay = listItem.querySelector(".matches-display");

		// Initial matches display
		this.uiRenderValidationDisplay(
			matchesDisplay,
			listItem,
			initialAssetName,
			true,
		);

		// Add real-time validation on input
		input.addEventListener("input", (e) => {
			this.uiRenderValidationDisplay(
				matchesDisplay,
				listItem,
				e.target.value,
				false,
			);
		});
	},

	uiRenderValidationDisplay(
		matchesDisplay,
		listItem,
		assetName,
		isInitial = false,
	) {
		const validation = this.validateAssetName(assetName);
		const matchCount = validation.matches.length;

		if (matchCount === 0) {
			matchesDisplay.innerHTML = `
				<span>Matches (0):</span>
				<div class="matches-pills">
					<span class="matches-pill no-matches">no matches</span>
				</div>
			`;
		} else {
			const pillsHtml = validation.matches
				.map((match) => `<span class="matches-pill">${match}</span>`)
				.join("");
			matchesDisplay.innerHTML = `
				<span>Matches (${matchCount}):</span>
				<div class="matches-pills">${pillsHtml}</div>
			`;
		}

		// Update list item validation styling
		if (isInitial) {
			// Initial validation: show actual server state
			if (validation.valid) {
				listItem.classList.remove("invalid-asset");
				listItem.classList.add("valid-asset");
			} else {
				listItem.classList.add("invalid-asset");
				listItem.classList.remove("valid-asset");
			}
		} else {
			// During typing: show neutral for valid, red for invalid
			if (validation.valid) {
				listItem.classList.remove("invalid-asset");
				listItem.classList.remove("valid-asset");
				// Leave neutral - valid but not saved yet
			} else {
				listItem.classList.add("invalid-asset");
				listItem.classList.remove("valid-asset");
			}
		}
	},

	uiSetupAssetForm(listItem) {
		const form = listItem.querySelector("form");

		form.addEventListener("submit", async (e) => {
			e.preventDefault();

			const assetId = listItem.getAttribute("data-asset-id");
			const newName = form.querySelector('input[name="assetName"]').value;

			try {
				await this.renameAsset(assetId, newName);
			} catch (error) {
				console.error(error);
			}

			// Reset focus to the list item
			listItem.focus();
		});
	},

	async *streamFolderAssets(folderId) {
		let page = 0;
		let totalAssets;
		let displayName;
		let processedAssets = 0;

		console.log(`📂 Loading assets from folder ${folderId}...`);

		while (true) {
			console.log(`📄 Requesting page ${page}...`);
			const response = await this.loadFolderAssetPage(folderId, page);

			if (!response || !response.success) {
				throw new Error(
					`Failed to load folder assets for folder ${folderId}`,
				);
			}

			const assets = response.assets || [];

			// Set total and display name from first response
			if (totalAssets === undefined && response.mimeProperties) {
				totalAssets = parseInt(response.mimeProperties.total, 10);
				const folderName = response.folderName || "Unknown Folder";
				displayName = `${folderName} (${folderId})`;
				console.log(
					`📊 Found ${totalAssets} total assets in ${displayName}`,
				);
			}

			console.log(
				`📥 Loaded ${assets.length} assets from page ${page} of ${displayName}`,
			);

			// Yield each asset individually for streaming processing
			for (const asset of assets) {
				yield asset;
				processedAssets++;
			}

			const hasMorePages =
				assets.length === this.folderPageSize &&
				processedAssets < totalAssets;

			console.log(
				`📈 Progress: ${processedAssets}/${totalAssets} assets loaded`,
			);

			if (!hasMorePages) {
				console.log(
					`✅ Completed loading and processing all ${processedAssets} assets from ${displayName}`,
				);
				break;
			}
			page++;
		}
	},

	stripExtension(filename) {
		return filename.replace(/\.[^/.]+$/, "");
	},

	getCurrentAssets() {
		return Array.from(document.querySelectorAll("li[data-asset-id]")).map(
			(li) => ({
				id: li.getAttribute("data-asset-id"),
				title: li.getAttribute("data-asset-name"),
			}),
		);
	},

	getBulkTransformations(findPattern, replacePattern) {
		if (!findPattern) return [];

		const assets = this.getCurrentAssets();
		const matches = assets.filter((asset) => {
			return asset.title.includes(findPattern);
		});

		return matches.map((asset) => {
			const originalName = asset.title;
			const newName = originalName.replace(
				new RegExp(findPattern, "g"),
				replacePattern,
			);
			const validation = this.validateAssetName(newName);

			return {
				assetId: asset.id,
				originalName,
				newName,
				isValid: validation.valid,
			};
		});
	},

	uiGenerateBulkPreview(findPattern, replacePattern) {
		const previewContainer = document.querySelector(
			"#bulk-preview-container",
		);
		const applyButton = document.querySelector("#bulk-apply");

		const transformations = this.getBulkTransformations(
			findPattern,
			replacePattern,
		);

		if (transformations.length === 0) {
			previewContainer.innerHTML = !findPattern
				? ""
				: `<div class="bulk-preview-item">No files match "${findPattern}"</div>`;
			applyButton.disabled = true;
			return;
		}

		const previewItems = transformations
			.map((transform) => {
				const validClass = transform.isValid
					? ""
					: ' style="background-color: #ffe6e6;"';

				return `
				<div class="bulk-preview-item"${validClass}>
					<span class="before">${transform.originalName}</span> → <span class="after">${transform.newName}</span>
					${!transform.isValid ? ' <small style="color: #dc3545;">(Invalid)</small>' : ""}
				</div>
			`;
			})
			.join("");

		previewContainer.innerHTML = `
			<div style="padding: 0.5rem; background-color: #e9ecef; border-bottom: 1px solid #dee2e6;">
				${transformations.length} file${transformations.length !== 1 ? "s" : ""} will be renamed
			</div>
			${previewItems}
		`;

		applyButton.disabled = false;
	},

	async applyBulkFindReplace(findPattern, replacePattern) {
		const transformations = this.getBulkTransformations(
			findPattern,
			replacePattern,
		);
		const progressDiv = document.querySelector("#bulk-progress");
		const applyButton = document.querySelector("#bulk-apply");

		if (transformations.length === 0) return;

		// Disable apply button and show progress
		applyButton.disabled = true;
		progressDiv.classList.add("active");

		let successCount = 0;
		let errorCount = 0;

		for (let i = 0; i < transformations.length; i++) {
			const transform = transformations[i];

			progressDiv.innerHTML = `Renaming ${i + 1} of ${transformations.length}: ${transform.originalName}...`;

			try {
				await this.renameAsset(transform.assetId, transform.newName);
				successCount++;
			} catch (error) {
				console.error(`Failed to rename ${transform.originalName}:`, error);
				errorCount++;
			}

			// Add 200ms delay between renames (except for the last one)
			if (i < transformations.length - 1) {
				await new Promise((resolve) => setTimeout(resolve, 200));
			}
		}

		// Show final results
		progressDiv.innerHTML = `Complete! Successfully renamed ${successCount} files. ${errorCount > 0 ? `${errorCount} errors.` : ""}`;

		// Clear preview and reset form
		document.querySelector("#bulk-preview-container").innerHTML = "";
		document.querySelector("#bulk-find").value = "";
		document.querySelector("#bulk-replace").value = "";

		// Hide progress after 3 seconds
		setTimeout(() => {
			progressDiv.classList.remove("active");
			applyButton.disabled = false;
		}, 3000);
	},

	async allAssets(folderId) {
		const assets = [];
		for await (const asset of this.streamFolderAssets(folderId)) {
			assets.push(asset);
		}
		return assets;
	},

	async loadFolderAssetPage(folderId, page = 0) {
		const url = new URL("https://admin.webdamdb.com/remoterequest.php");
		url.searchParams.set("method", "getFolderAssets");
		url.searchParams.set("folderId", folderId);
		url.searchParams.set("sortBy", "filename");
		url.searchParams.set("sortOrder", "desc");
		url.searchParams.set("uniqueId", window.WebDAM.CURRENT_USER.id_encrypted);
		url.searchParams.set(
			"sessionExpiration",
			this.extractSessionExpiration(),
		);
		url.searchParams.set("page", page + 1);
		url.searchParams.set("numperpage", this.folderPageSize);

		const response = await fetch(url.href, {
			credentials: "omit",
			headers: {
				Accept: "application/json, text/javascript, */*; q=0.01",
			},
			mode: "cors",
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const rawJSON = await response.text();
		const data = JSON.parse(rawJSON.slice(this.jsonPrefixLength));
		return data;
	},

	async renameFile(assetId, newName) {
		const url = new URL(
			"https://parachutehome.webdamdb.com/remoterequest.php",
		);

		const formData = new URLSearchParams();
		formData.set("method", "saveMetadataByField");
		formData.set("id", assetId);
		formData.set("fieldName", "ASSETNAME");
		formData.set("fieldType", "text");
		formData.set("value", newName);

		const response = await fetch(url.href, {
			credentials: "include",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
			},
			body: formData.toString(),
			method: "POST",
			mode: "cors",
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const rawJSON = await response.text();
		const data = JSON.parse(rawJSON.slice(this.jsonPrefixLength));
		return data;
	},

	async renameAsset(assetId, newName) {
		// Gather all required elements upfront
		const listItem = document.querySelector(`li[data-asset-id="${assetId}"]`);
		const form = listItem?.querySelector("form");
		const button = form?.querySelector("button");
		const input = form?.querySelector('input[name="assetName"]');

		// Validate required elements
		if (!listItem || !form || !button || !input) {
			throw new Error(`Cannot find required elements for asset: ${assetId}`);
		}

		// Check if asset name is valid for styling purposes
		const isValid = this.validateAssetName(newName).valid;

		// Update button state
		button.disabled = true;
		button.textContent = "Renaming...";

		try {
			await this.renameFile(assetId, newName);

			// Update the data-asset-name attribute
			listItem.setAttribute("data-asset-name", newName);

			// Update list item styling based on validity
			if (isValid) {
				listItem.classList.remove("invalid-asset");
				listItem.classList.add("valid-asset");
			} else {
				listItem.classList.add("invalid-asset");
				listItem.classList.remove("valid-asset");
			}

			// Update the input field
			input.value = newName;

			// Update button state
			button.textContent = "Renamed!";
			button.classList.add("success");
			setTimeout(() => {
				button.textContent = "Rename";
				button.classList.remove("success");
				button.disabled = false;
			}, 2000);
		} catch (error) {
			console.error("Rename failed:", error);

			// Update button state
			button.textContent = "Error";
			button.classList.add("error");
			setTimeout(() => {
				button.textContent = "Rename";
				button.classList.remove("error");
				button.disabled = false;
			}, 2000);

			// Re-throw error for caller to handle if needed
			throw error;
		}
	},

	getActiveFolderId() {
		return window.WebDAM.FOLDER_ID;
	},

	extractSessionExpiration() {
		try {
			const paginationPath = window.WebDAM.PAGINATION_PATH;
			if (paginationPath) {
				const urlParams = new URLSearchParams(
					new URL(paginationPath).search,
				);
				const sessionExpiration = urlParams.get("sessionExpiration");

				if (sessionExpiration) {
					return sessionExpiration;
				}
			}
		} catch (error) {
			throw new Error(
				`Could not extract sessionExpiration from WebDAM.PAGINATION_PATH: ${error.message}`,
			);
		}

		throw new Error("No sessionExpiration found in WebDAM.PAGINATION_PATH");
	},
};

console.log("👹 FileChompy is Ready to chomp some files!");
FileChompy.main();
