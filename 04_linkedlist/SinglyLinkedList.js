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

		console.log(currentNode)

		return currentNode === null ? -1 : currentNode
	}

	// 根据index查找节点，下标从0开始
  	findByIndex (index) {
		let currentNode = this.head.next
		let pos = 0
		while( currentNode !== null && currentNode.element !== index) {
			currentNode = currentNode.next
			pos++
		}

		console.log(currentNode)
		return currentNode === null ? -1 : currentNode
  	}

  	// 向链表末尾追加节点
  	append(newElement) {
  		const newNode = new Node(newElement)
  		let currentNode = this.head
  		while(currentNode.next){
  			currentNode = currentNode.next
  		}
  		currentNode.next = newNode
  	}

 	// 指定元素向后插入
  	insert (newElement, element) {
  		let currentNode = this.findByValue(element)
  		if(currentNode === -1) {
  			alert("未找到插入位置")
  			return
  		}
  		const newNode = new Node(newElement)
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
  			alert("未找到元素")
  			return
  		}
  		prevNode.next = prevNode.next.next
  	}

  	// 遍历显示所有节点
  	display () {
  		let currentNode = this.head.next
  		while( currentNode != null ) {
  			console.log(currentNode.element + '=> ')
  			currentNode = currentNode.next
  		}
  	}
}
