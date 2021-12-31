//guide.js
const steps = [
	{
		element: '#one',
		popover: {
			title: '弹窗标题', //也可以使用HTML标签
			description: '弹窗内容', //也可以使用HTML标签
			position: 'bottom', //位置，可选值： left, left-center, left-bottom, top, top-center, top-right, right, right-center, right-bottom, bottom, bottom-center, bottom-right, mid-center
			offset: 20, //位移大小
		},
		onNext: (e) => {
			        console.log('转到第二步', e)
		        },
		
	},
	{
		element: '#one',
		popover: {
			title: '弹窗标题', //也可以使用HTML标签
			description: '弹窗内容', //也可以使用HTML标签
			position: 'bottom', //位置，可选值： left, left-center, left-bottom, top, top-center, top-right, right, right-center, right-bottom, bottom, bottom-center, bottom-right, mid-center
			offset: 20, //位移大小
		}
	},
	{
		element: '#one',
		popover: {
			title: '弹窗标题', //也可以使用HTML标签
			description: '弹窗内容', //也可以使用HTML标签
			position: 'bottom', //位置，可选值： left, left-center, left-bottom, top, top-center, top-right, right, right-center, right-bottom, bottom, bottom-center, bottom-right, mid-center
			offset: 20, //位移大小
		}
	}
]

export default steps
