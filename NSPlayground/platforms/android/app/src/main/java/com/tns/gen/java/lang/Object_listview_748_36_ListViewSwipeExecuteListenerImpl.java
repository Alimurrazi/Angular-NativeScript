/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.java.lang;

public class Object_listview_748_36_ListViewSwipeExecuteListenerImpl extends java.lang.Object implements com.tns.NativeScriptHashCodeProvider, com.telerik.widget.list.SwipeExecuteBehavior.SwipeExecuteListener {
	public Object_listview_748_36_ListViewSwipeExecuteListenerImpl(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	public void onSwipeStarted(int param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onSwipeStarted", void.class, args);
	}

	public void onSwipeProgressChanged(int param_0, int param_1, android.view.View param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		com.tns.Runtime.callJSMethod(this, "onSwipeProgressChanged", void.class, args);
	}

	public void onSwipeEnded(int param_0, int param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onSwipeEnded", void.class, args);
	}

	public void onExecuteFinished(int param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onExecuteFinished", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
