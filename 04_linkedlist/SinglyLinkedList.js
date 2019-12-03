/**
 * 1）单链表的插入、删除、查找操作；
 * 2）链表中存储的是int类型的数据；
 */

class Node {
	constructor(element) {
		this.element = element; 
		// 单链表尾节点为null
		this.next = null; 
	}
}
	
class LinkedList {
	constructor() {
		// 初始化node头节点
		this.head = new Node('head');
	}


	// 根据value查找节点
	findByValue (item) {
		let currentNode = this.head.next
		while( currentNode !== null && currentNode.element !== item) {
			currentNode = currentNode.next
		}

		console.log("根据value查找到:" , currentNode)
		return currentNode === null ? -1 : currentNode
	}

	// 根据index查找节点，下标从0开始
  	findByIndex (index) {
		let currentNode = this.head.next
		let pos = 0
		while( currentNode !== null && pos !== index) {
			currentNode = currentNode.next
			pos++
		}

		console.log("根据index查找到:" , currentNode)
		return currentNode === null ? -1 : currentNode
  	}

  	// 向链表末尾追加节点
  	append(newElement) {
  		const newNode = new Node(newElement)
  		let currentNode = this.head
  		while(currentNode.next){
  			currentNode = currentNode.next
  		}
  		console.log("插入: " , newNode)
  		currentNode.next = newNode
  	}

 	// 指定元素向后插入
  	insert (newElement, element) {
  		let currentNode = this.findByValue(element)
  		if(currentNode === -1) {
  			console.warn("未找到插入位置")
  			return
  		}
  		const newNode = new Node(newElement)
  		console.log("在" , currentNode.element, "后插入:", newElement )
  		newNode.next = currentNode.next
  		currentNode.next = newNode
  	}

  	// 查找前一个
  	findPrev (item) {
  		let currentNode = this.head
		while( currentNode !== null && currentNode.element !== item) {
			currentNode = currentNode.next
		}
		return currentNode.next === null ? -1 : currentNode

  	}

  	// 根据值删除
  	remove (item) {
  		const prevNode = this.findPrev(item);
  		if( prevNode === -1 ) {
  			console.warn("未找到元素")
  			return
  		}
  		console.log("删除节点", item)
  		prevNode.next = prevNode.next.next
  	}

  	// 遍历显示所有节点
  	display () {
  		let currentNode = this.head.next
  		console.info("展示当前链表")
  		while( currentNode != null ) {
  			console.log(currentNode.element)
  			currentNode = currentNode.next
  		}
  	}
}


// Test
const LList = new LinkedList()
console.log('-------------append item------------')
LList.append('chen')
LList.append('curry')
LList.append('sang')
LList.append('zhao') // chen -> curry -> sang -> zhao
console.log('-------------insert item------------')
LList.insert('qian', 'chen') // 首元素后插入
LList.insert('zhou', 'zhao') // 尾元素后插入
LList.display() // chen -> qian -> curry -> sang -> zhao -> zhou
console.log('-------------remove item------------')
LList.remove('curry')
LList.display() // chen -> qian -> sang -> zhao -> zhou
console.log('-------------find by item------------')
LList.findByValue('chen')
console.log('-------------find by index------------')
LList.findByIndex(2)
console.log('-------------与头结点同值元素测试------------')
LList.insert('head', 'sang')
LList.display() // chen -> qian -> sang -> head -> zhao -> zhou
LList.findPrev('head') // sang
LList.remove('head')
LList.display() // chen -> qian -> sang -> zhao -> zhou